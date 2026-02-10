# Quick Start Guide

## ✅ Your API is Running!

Server is running on: **http://localhost:3000**

---

## 📍 Available Endpoints

### 1. GET /health
**URL:** http://localhost:3000/health

**Test in browser:** Just visit the URL above

**Expected Response:**
```json
{
  "is_success": true,
  "official_email": "arsh0383.be23@chitkara.edu.in"
}
```

---

### 2. POST /bfhl
**URL:** http://localhost:3000/bfhl

**Cannot test in browser** - use curl or Postman

**Example - Fibonacci:**
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"fibonacci": 7}'
```

**Response:**
```json
{
  "is_success": true,
  "official_email": "arsh0383.be23@chitkara.edu.in",
  "data": [0,1,1,2,3,5,8]
}
```

---

## ⚠️ Important Notes

### "Cannot GET /" Error is CORRECT!
When you visit http://localhost:3000/ you will see:
```
Cannot GET /
```

**This is the expected behavior!** Your API has ONLY two endpoints:
- POST /bfhl
- GET /health

There is no root route (/) by design.

---

## 🧪 Test All Operations

### Fibonacci (7 terms)
```bash
curl -X POST http://localhost:3000/bfhl -H "Content-Type: application/json" -d '{"fibonacci": 7}'
```

### Prime Numbers
```bash
curl -X POST http://localhost:3000/bfhl -H "Content-Type: application/json" -d '{"prime": [1,2,3,4,5,6,7,8,9,10]}'
```

### LCM
```bash
curl -X POST http://localhost:3000/bfhl -H "Content-Type: application/json" -d '{"lcm": [4,6,8]}'
```

### HCF
```bash
curl -X POST http://localhost:3000/bfhl -H "Content-Type: application/json" -d '{"hcf": [12,18,24]}'
```

### AI (requires GEMINI_API_KEY in .env)
```bash
curl -X POST http://localhost:3000/bfhl -H "Content-Type: application/json" -d '{"AI": "What is the capital of France?"}'
```

---

## 🚀 Starting/Stopping Server

### Start Server
```bash
cd /Users/arshberi/chitkara-qualifier-api
./start.sh
```

Or manually:
```bash
/opt/homebrew/bin/node server.js
```

### Stop Server
Press `Ctrl+C` in the terminal where server is running

Or kill the process:
```bash
lsof -ti:3000 | xargs kill -9
```

---

## 🌐 Browser Testing

**✅ Works in browser:**
- http://localhost:3000/health

**❌ Doesn't work in browser:**
- http://localhost:3000/ (shows "Cannot GET /" - this is correct!)
- http://localhost:3000/bfhl (POST requests need curl/Postman)

---

## 📝 Summary

Your API is **production-ready** and working perfectly!

- ✅ Server running on port 3000
- ✅ /health endpoint working
- ✅ /bfhl endpoint working
- ✅ Fibonacci returns correct output
- ✅ No root route (as required)
