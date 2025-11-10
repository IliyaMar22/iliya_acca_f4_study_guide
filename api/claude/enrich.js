const axios = require('axios');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Health check endpoint
  if (req.method === 'GET') {
    const apiKey = process.env.CLAUDE_API_KEY;
    return res.json({
      status: 'ok',
      service: 'acca-f4-claude-proxy',
      apiKeyConfigured: !!apiKey,
      model: process.env.CLAUDE_MODEL || 'claude-sonnet-4-20250514',
      timestamp: new Date().toISOString()
    });
  }

  // Only allow POST requests for enrichment
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.CLAUDE_API_KEY;

  if (!apiKey) {
    console.error('[ERROR] Claude API key is not configured');
    return res.status(500).json({ 
      error: 'Claude API key is not configured on the server.',
      hint: 'Please set CLAUDE_API_KEY environment variable in Vercel dashboard.'
    });
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
    console.log('[INFO] Calling Claude API with model:', model);
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
      console.error('[ERROR] Claude API returned empty response');
      return res.status(502).json({ error: 'Claude API returned an empty response.' });
    }

    console.log('[SUCCESS] Claude enrichment completed');
    res.json({ enrichment });
  } catch (error) {
    console.error('[ERROR] Claude API request failed:', {
      message: error.message,
      status: error?.response?.status,
      data: error?.response?.data
    });

    const status = error?.response?.status || 500;
    const message =
      error?.response?.data?.error?.message ||
      error?.response?.data?.message ||
      error.message ||
      'Unable to retrieve enrichment from Claude at this time.';

    res.status(status).json({ 
      error: message,
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};
