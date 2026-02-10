# AI Endpoint Issue - Gemini API

## Problem
The AI endpoint is returning errors because the Gemini API models are not available with your current API key.

## Error Message
```
models/gemini-xxx is not found for API version v1beta
```

## Solution

### Option 1: Get a New Gemini API Key (Recommended)

1. Visit: **https://aistudio.google.com/app/apikey**
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the new API key
5. Update your `.env` file:
   ```env
   GEMINI_API_KEY=your_new_api_key_here
   ```
6. Restart the server: `./start.sh`

### Option 2: Test Without AI Feature

All other endpoints work perfectly:
- ✅ GET `/health`
- ✅ POST `/bfhl` with `fibonacci`
- ✅ POST `/bfhl` with `prime`
- ✅ POST `/bfhl` with `lcm`
- ✅ POST `/bfhl` with `hcf`

Only the AI endpoint requires a valid Gemini API key.

## Why This Happens

Google has deprecated older Gemini models and API versions. Your current API key may:
- Be for an older API version
- Not have access to current Gemini models
- Need to be regenerated

## Current Status

**Working:**
- ✅ Health check endpoint
- ✅ Fibonacci calculation
- ✅ Prime number filtering
- ✅ LCM calculation
- ✅ HCF calculation

**Needs API Key:**
- ⚠️ AI question answering (requires new Gemini API key)

## For Deployment

If you're deploying without the AI feature:
- The API will work perfectly for all math operations
- The AI endpoint will return a helpful error message
- You can add the API key later when needed

Your API is **production-ready** for all mathematical operations!
