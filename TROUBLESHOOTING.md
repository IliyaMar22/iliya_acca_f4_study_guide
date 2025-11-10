# 🔧 Claude Integration Troubleshooting Guide

## Issue: "Unable to retrieve additional details right now"

If you're seeing this error after deploying to Vercel, follow these steps:

---

## Step 1: Check Environment Variables in Vercel

**This is the most common issue!**

1. Go to [Vercel Dashboard](https://vercel.com)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Verify these variables exist:
   - `CLAUDE_API_KEY` - Your Anthropic API key
   - `CLAUDE_MODEL` (optional) - Default: `claude-sonnet-4-20250514`

5. **Important**: Make sure they're set for:
   - ✅ Production
   - ✅ Preview  
   - ✅ Development

6. **After adding/updating variables**: You MUST redeploy!
   - Go to **Deployments** tab
   - Click **"..."** on latest deployment → **Redeploy**

---

## Step 2: Test the API Endpoint Directly

Open your browser console (F12) and run:

```javascript
fetch('https://your-app.vercel.app/api/claude/enrich', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    chapterNumber: 1,
    summary: 'Test summary',
    language: 'en'
  })
})
.then(r => r.json())
.then(console.log)
.catch(console.error);
```

**Check the response:**
- If you see `"Claude API key is not configured"` → Environment variable not set
- If you see `"model: ..."` error → Model name issue
- If you see network error → Function not deployed

---

## Step 3: Check Function Logs in Vercel

1. Go to Vercel Dashboard → Your Project
2. Click **Functions** tab
3. Click on `/api/claude/enrich`
4. Check **Logs** for errors:
   - `[ERROR] Claude API key is not configured` → Set environment variable
   - `[ERROR] Claude API request failed` → Check API key validity/credits
   - Timeout errors → Check API key or network

---

## Step 4: Verify Function is Deployed

1. Go to Vercel Dashboard → **Deployments**
2. Click on latest deployment
3. Check **Build Logs**:
   - Should see: `✓ Deploying serverless functions`
   - Should see: `✓ api/claude/enrich.js`

If function is missing:
- Check that `api/claude/enrich.js` exists in your repo
- Redeploy: `vercel --prod`

---

## Step 5: Test Health Check Endpoint

Visit in browser:
```
https://your-app.vercel.app/api/claude/enrich
```

Should return:
```json
{
  "status": "ok",
  "service": "acca-f4-claude-proxy",
  "apiKeyConfigured": true/false,
  "model": "claude-sonnet-4-20250514",
  "timestamp": "..."
}
```

- If `apiKeyConfigured: false` → Set environment variable
- If 404 → Function not deployed

---

## Common Error Messages & Solutions

### "Claude API key is not configured on the server"
**Solution**: Set `CLAUDE_API_KEY` in Vercel environment variables and redeploy

### "model: claude-..."
**Solution**: Check model name. Try `claude-sonnet-4-20250514` or `claude-3-5-sonnet-20241022`

### "401 Unauthorized" or "403 Forbidden"
**Solution**: API key is invalid or expired. Generate new key from Anthropic dashboard

### "429 Too Many Requests"
**Solution**: Rate limit exceeded. Wait a few minutes or upgrade API plan

### "Network error" or CORS error
**Solution**: Function not deployed. Check Vercel build logs and redeploy

### Timeout errors
**Solution**: Claude API is slow. This is normal (2-5 seconds). Check function timeout settings

---

## Quick Fix Checklist

- [ ] Environment variables set in Vercel (all environments)
- [ ] Redeployed after setting environment variables
- [ ] Function appears in Vercel Functions tab
- [ ] Health check endpoint returns `apiKeyConfigured: true`
- [ ] API key is valid (test locally first)
- [ ] Browser console shows specific error (check Network tab)

---

## Still Not Working?

1. **Check browser console** (F12 → Console tab) for detailed errors
2. **Check Network tab** (F12 → Network) → Look for `/api/claude/enrich` request
3. **Check Vercel function logs** for server-side errors
4. **Test locally first**:
   ```bash
   npm run server  # Terminal 1
   npm start       # Terminal 2
   ```
   If local works but Vercel doesn't → Environment variable issue

---

## Need More Help?

1. Share the exact error message from browser console
2. Share Vercel function logs
3. Share health check endpoint response
4. Verify API key works: Test with curl locally

---

**Most common fix**: Set environment variables in Vercel and redeploy! 🚀

