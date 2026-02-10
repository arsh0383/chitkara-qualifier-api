#!/bin/bash

echo "🚀 Starting Technical Qualifier API..."
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo "⚠️  .env file not found. Creating from .env.example..."
    cp .env.example .env
    echo "✅ Created .env file"
    echo "⚠️  Please add your GEMINI_API_KEY to .env file"
    echo ""
fi

# Kill any existing processes on port 3000
echo "🔍 Checking for existing processes on port 3000..."
PIDS=$(lsof -ti:3000)
if [ ! -z "$PIDS" ]; then
    echo "🛑 Killing existing processes: $PIDS"
    kill -9 $PIDS 2>/dev/null
    sleep 1
fi

# Start the server
echo "▶️  Starting server on port 3000..."
echo ""
/opt/homebrew/bin/node server.js
