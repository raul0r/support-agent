# 🛠️ L1 Support Assistant

A local AI-powered assistant to help L1 support agents generate structured ticket drafts, summarize issues, and automate ticket creation — powered by Mistral 7B running on Ollama, FastAPI backend, and React + TailwindCSS frontend.

---

## ✨ Features

- 🧠 Local Language Model (Mistral 7B via Ollama)
- ⚙️ FastAPI backend to communicate with the LLM
- 💻 React + TailwindCSS frontend for a modern UI
- 📄 Generates complete ticket templates from user descriptions
- 📤 Prepares ticket drafts ready to be emailed
- 📦 Organized modular project structure

---

## 🏗️ Project Structure

l1-support-assistant/ ├── backend/ # FastAPI backend │ └── main.py │ ├── frontend-react/ # React frontend (Beta) │ ├── src/ │ ├── package.json │ └── tailwind.config.js │ ├── frontend-streamlit/ # (Optional) Streamlit prototype │ └── streamlit_app.py │ ├── requirements.txt # Python dependencies ├── README.md # This file ├── CHANGELOG.md # Project version history └── LICENSE

yaml
Copy
Edit

---

## 🚀 How to Run Locally

### 1. Requirements
- Python 3.10+
- Node.js 18+
- Ollama installed and Mistral model pulled
- Recommended: virtual environment for Python

---

### 2. Set Up the Backend (FastAPI)

```bash
# Activate virtual environment (if you have one)
source ~/path/to/your/venv/bin/activate

# Move into backend folder
cd backend

# Install required packages if not done yet
pip install fastapi uvicorn requests

# Run the FastAPI backend
uvicorn main:app --reload --port 8000
✅ Backend available at: http://localhost:8000

3. Set Up the Frontend (React + TailwindCSS)
bash
Copy
Edit
# Move into frontend folder
cd frontend-react

# Install Node.js dependencies
npm install

# Run the React app
npm run dev
✅ Frontend available at: http://localhost:5173

4. Run Ollama and Mistral
bash
Copy
Edit
ollama run mistral
✅ Ollama API available at: http://localhost:11434

📋 Usage Flow
Fill in the issue description, system affected, impact, and urgency.

Click Draft Ticket.

Review the generated draft ticket message.

(Upcoming) Confirm and send the ticket by email automatically.

🧩 Next Features
✉️ Email sending functionality

✍️ User editing before sending

🗂️ Session logging and storage

🔒 Authentication for production

🎨 UX Improvements (spinners, confirmation modals)

📝 License
This project is open source under the MIT License.

🤝 Contributing
Feel free to fork, contribute, and suggest improvements!
PRs are welcome.

Built with ❤️ by Raul 🚀