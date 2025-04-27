#!/bin/bash

echo "🔵 Starting Ollama with Mistral model..."
ollama run mistral &

sleep 3

echo "🟢 Activating Python virtual environment..."
source /home/raul0r/repos/AI/l1-agent-env/bin/activate

echo "🟡 Starting FastAPI backend..."
cd /home/raul0r/projects/support-agent/backend
uvicorn main:app --reload --port 8000 &

sleep 3

echo "🟣 Starting React frontend..."
cd /home/raul0r/projects/support-agent/frontend-react
npm run dev

