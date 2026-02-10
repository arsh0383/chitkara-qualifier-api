# Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```
Follow the prompts to authenticate.

### Step 3: Deploy
```bash
cd /Users/arshberi/chitkara-qualifier-api
vercel
```

When prompted:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No
- **Project name?** → chitkara-qualifier-api (or press Enter)
- **Directory?** → ./ (press Enter)
- **Override settings?** → No

### Step 4: Set Environment Variables
After deployment, go to your Vercel dashboard:
1. Open your project
2. Go to Settings → Environment Variables
3. Add these variables:
   - `GEMINI_API_KEY` = `AIzaSyAPIf1_FphIBVSzhOMTnRjctRywX8tzfMo`
   - `OFFICIAL_EMAIL` = `arsh0383.be23@chitkara.edu.in`

### Step 5: Redeploy
```bash
vercel --prod
```

Your API will be live at: `https://chitkara-qualifier-api.vercel.app`

---

## Alternative: Deploy to Railway

### Step 1: Install Railway CLI
```bash
npm install -g @railway/cli
```

### Step 2: Login
```bash
railway login
```

### Step 3: Initialize and Deploy
```bash
cd /Users/arshberi/chitkara-qualifier-api
railway init
railway up
```

### Step 4: Set Environment Variables
```bash
railway variables set GEMINI_API_KEY=AIzaSyAPIf1_FphIBVSzhOMTnRjctRywX8tzfMo
railway variables set OFFICIAL_EMAIL=arsh0383.be23@chitkara.edu.in
```

### Step 5: Get Your URL
```bash
railway domain
```

---

## Test Your Deployed API

Once deployed, test with:

```bash
# Replace YOUR_DEPLOYMENT_URL with your actual URL
curl -X POST https://YOUR_DEPLOYMENT_URL/bfhl \
  -H "Content-Type: application/json" \
  -d '{"fibonacci": 7}'
```

Expected response:
```json
{
  "is_success": true,
  "official_email": "arsh0383.be23@chitkara.edu.in",
  "data": [0,1,1,2,3,5,8]
}
```

---

## Files Ready for Deployment

✅ `vercel.json` - Vercel configuration  
✅ `package.json` - Dependencies  
✅ `.env.example` - Environment template  
✅ All source code files  

Your API is production-ready and can be deployed immediately!
