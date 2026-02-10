#!/bin/bash

echo "=== Testing Technical Qualifier API ==="
echo ""

echo "1. Testing GET / (Root)"
curl -s http://localhost:3000/ | python3 -m json.tool
echo -e "\n"

echo "2. Testing GET /health"
curl -s http://localhost:3000/health | python3 -m json.tool
echo -e "\n"

echo "3. Testing POST /bfhl - Fibonacci (7 terms)"
curl -s -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"fibonacci": 7}' | python3 -m json.tool
echo -e "\n"

echo "4. Testing POST /bfhl - Prime Numbers"
curl -s -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"prime": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}' | python3 -m json.tool
echo -e "\n"

echo "5. Testing POST /bfhl - LCM"
curl -s -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"lcm": [4, 6, 8]}' | python3 -m json.tool
echo -e "\n"

echo "6. Testing POST /bfhl - HCF"
curl -s -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"hcf": [12, 18, 24]}' | python3 -m json.tool
echo -e "\n"

echo "7. Testing POST /bfhl - Error: Multiple keys"
curl -s -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"fibonacci": 10, "prime": [1,2,3]}' | python3 -m json.tool
echo -e "\n"

echo "8. Testing POST /bfhl - Error: Empty array"
curl -s -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"prime": []}' | python3 -m json.tool
echo -e "\n"

echo "=== All tests complete ==="
