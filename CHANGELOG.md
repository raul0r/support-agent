# 📦 CHANGELOG.md

## Version 0.0.1 - Pre-Alpha
**Date:** 2025-04-25

### ✨ Features
- ✅ Initial connection between Streamlit frontend, FastAPI backend, and Mistral 7B via Ollama.
- ✅ User can input a support issue using a friendly UI form (Streamlit).
- ✅ Submitted data is sent to the LLM and returns a full ticket template.

### 📤 Output
- The output includes a complete and structured ticket message:
  - Problem summary
  - Affected system
  - Impact level
  - Optional user and contact info
  - Additional notes or logs

### 💡 Purpose
This version helps support agents format tickets correctly and consistently before dispatch.
It serves as the foundation for automatic ticket creation via email, ensuring all required info is included upfront.

---

## Version 0.1.0 - Beta
**Date:** 2025-04-27

### ✨ Features
- ✅ Migrated frontend from Streamlit to a full React app (using Vite).
- ✅ Created clean project structure: `/frontend-react/`, `/backend/`, keeping `/frontend-streamlit/` as prototype.
- ✅ Added TailwindCSS for professional UI styling.
- ✅ Implemented `TicketForm` component: collect description, category, impact, urgency.
- ✅ Implemented `DraftPreview` component: show generated ticket after LLM response.
- ✅ Created `api.js` module to communicate from React frontend to FastAPI backend.
- ✅ Integrated full local AI-powered pipeline: React → FastAPI → Ollama (Mistral) → Response back to React.

### ⚡ Improvements
- ✅ Added CORS middleware to FastAPI to support React connections.
- ✅ Configured TailwindCSS and basic responsive styling for forms and output.

### 💡 Purpose
This beta release enables a fully modern web frontend for the L1 Support Assistant, improving usability, style, and system modularity.
It is the foundation for user confirmation, email integration, and multi-step workflows.

---

### 🔜 Next
- Add email sending endpoint `/send-ticket` in backend.
- Allow user confirmation and editing after draft generation.
- Improve loading states and error handling.
- Add user session logging for audit/tracking.
- Implement authentication layer for production deployments.
