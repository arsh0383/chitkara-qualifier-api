# Technical Qualifier REST API

Production-ready REST API built with Node.js and Express for technical assessment.

## Features

- Mathematical operations (Fibonacci, Prime filtering, LCM, HCF)
- AI integration with Google Gemini
- Comprehensive input validation
- Graceful error handling
- Production-ready deployment configuration

## API Endpoints

### POST /bfhl

Performs mathematical or AI operations based on the request body.

**Request Body** (exactly one key required):

```json
{ "fibonacci": 7 }
{ "prime": [1, 2, 3, 4, 5] }
{ "lcm": [4, 6, 8] }
{ "hcf": [12, 18, 24] }
{ "AI": "What is the capital of France?" }
```

**Example Fibonacci:**
- Input: `{ "fibonacci": 7 }`
- Output: `{ "is_success": true, "official_email": "arsh0383.be23@chitkara.edu.in", "data": [0,1,1,2,3,5,8] }`

**Success Response** (200):

```json
{
  "is_success": true,
  "official_email": "arsh0383.be23@chitkara.edu.in",
  "data": [result]
}
```

**Error Response** (400/500):

```json
{
  "is_success": false,
  "official_email": "arsh0383.be23@chitkara.edu.in",
  "error": "Error message"
}
```

### GET /health

Health check endpoint.

**Response** (200):

```json
{
  "is_success": true,
  "official_email": "arsh0383.be23@chitkara.edu.in"
}
```

## Local Setup

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chitkara-qualifier-api
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```env
PORT=3000
GEMINI_API_KEY=your_gemini_api_key_here
OFFICIAL_EMAIL=arsh0383.be23@chitkara.edu.in
```

Get your Gemini API key from: https://makersuite.google.com/app/apikey

5. Start the server:

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The API will be available at `http://localhost:3000`

## Testing Examples

### Fibonacci
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"fibonacci": 7}'
```
Expected output: `[0,1,1,2,3,5,8]`

### Prime Numbers
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"prime": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}'
```

### LCM
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"lcm": [4, 6, 8]}'
```

### HCF
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"hcf": [12, 18, 24]}'
```

### AI Question
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"AI": "What is the capital of France?"}'
```

### Health Check
```bash
curl http://localhost:3000/health
```

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Create `vercel.json` in the project root:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}
```

3. Deploy:
```bash
vercel
```

4. Set environment variables in Vercel dashboard:
   - Go to your project settings
   - Navigate to Environment Variables
   - Add `GEMINI_API_KEY` and `OFFICIAL_EMAIL`

5. Redeploy:
```bash
vercel --prod
```

### Deploy to Railway

1. Install Railway CLI:
```bash
npm install -g @railway/cli
```

2. Login to Railway:
```bash
railway login
```

3. Initialize project:
```bash
railway init
```

4. Add environment variables:
```bash
railway variables set GEMINI_API_KEY=your_api_key_here
railway variables set OFFICIAL_EMAIL=arsh0383.be23@chitkara.edu.in
```

5. Deploy:
```bash
railway up
```

6. Get your deployment URL:
```bash
railway domain
```

Alternatively, deploy via Railway dashboard:
1. Go to https://railway.app
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Add environment variables in the Variables tab
5. Railway will automatically deploy

## Project Structure

```
chitkara-qualifier-api/
├── src/
│   ├── controllers/
│   │   └── bfhlController.js    # Request handling logic
│   ├── routes/
│   │   └── bfhlRoutes.js        # API route definitions
│   ├── utils/
│   │   ├── mathUtils.js         # Mathematical operations
│   │   └── aiUtils.js           # AI integration
│   ├── middleware/
│   │   └── errorHandler.js      # Global error handler
│   └── app.js                   # Express app configuration
├── server.js                    # Server entry point
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

## Validation Rules

- Only one operation key allowed per request
- Empty arrays are rejected
- Negative numbers for Fibonacci are rejected
- Non-positive integers for LCM/HCF are rejected
- Empty strings for AI questions are rejected
- Invalid data types return 400 error
- Server errors return 500 with error message

## Error Handling

The API implements comprehensive error handling:
- Input validation errors → 400 Bad Request
- Server/AI errors → 500 Internal Server Error
- All errors return standardized JSON response
- Server never crashes on errors

## License

MIT
