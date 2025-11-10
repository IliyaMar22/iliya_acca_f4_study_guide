const axios = require('axios');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.CLAUDE_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'Claude API key is not configured on the server.' });
  }

  const { chapterNumber, summary, language = 'en' } = req.body || {};

  if (!summary || typeof summary !== 'string' || summary.trim().length === 0) {
    return res.status(400).json({ error: 'A non-empty chapter summary is required.' });
  }

  const targetLanguage = language === 'bg' ? 'Bulgarian' : 'English';
  const model = process.env.CLAUDE_MODEL || 'claude-sonnet-4-20250514';

  const systemPrompt = [
    'You are an expert ACCA F4 Corporate and Business Law tutor who augments existing study summaries.',
    'Use the provided chapter synopsis as your base context and expand upon it with additional depth.',
    `Always answer in ${targetLanguage}.`,
    'Return concise, high-value insights that help students master examiner expectations, clarify legal nuances, and connect to real scenarios.',
    'Structure the response into four clearly labeled sections:',
    '1. Key Enhancements (additionally important concepts, definitions, or clarifications).',
    '2. Exam-Focused Clarifications (common pitfalls, examiner tips, distinctions learners miss).',
    '3. Real-World & Case References (notable cases, international comparisons, practical relevance).',
    '4. Rapid-Fire Checks (three short self-test prompts or flashcard-style questions).',
    'Stay under 500 words and avoid repeating the original summary verbatim.',
    'If the user provided Bulgarian content, you may reference English case names but explain in Bulgarian.'
  ].join(' ');

  const userPrompt = [
    `Existing condensed summary for Chapter ${chapterNumber || 'N/A'}:`,
    summary.trim(),
    '',
    'Using the structure above, enrich the material with additional granularity while remaining faithful to the ACCA F4 syllabus.',
    'Where helpful, briefly contrast with related chapters or legal systems, but do not fabricate legislation.',
    'If there is insufficient data, acknowledge the gap and suggest what extra information would be valuable.'
  ].join('\n');

  try {
    const { data } = await axios.post(
      'https://api.anthropic.com/v1/messages',
      {
        model: model,
        max_tokens: 800,
        temperature: 0.3,
        system: systemPrompt,
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: userPrompt
              }
            ]
          }
        ]
      },
      {
        headers: {
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json'
        },
        timeout: 30000
      }
    );

    const enrichment = Array.isArray(data?.content)
      ? data.content
          .filter(block => block?.type === 'text')
          .map(block => block.text)
          .join('\n')
          .trim()
      : '';

    if (!enrichment) {
      return res.status(502).json({ error: 'Claude API returned an empty response.' });
    }

    res.json({ enrichment });
  } catch (error) {
    console.error('[Claude Proxy] Request failed:', error?.response?.data || error.message);

    const status = error?.response?.status || 500;
    const message =
      error?.response?.data?.error?.message ||
      error?.response?.data?.message ||
      'Unable to retrieve enrichment from Claude at this time.';

    res.status(status).json({ error: message });
  }
};

