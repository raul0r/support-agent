import streamlit as st
import requests

st.set_page_config(page_title="L1 Support Assistant", layout="centered")

st.title("🛠️ L1 Support Assistant")
st.subheader("Describe the issue to generate a structured ticket")

# Input fields
description = st.text_area("🔍 Problem Description", height=150)
system = st.selectbox("💻 Affected System", ["Email", "Network", "Printer", "Application", "Other"])
impact = st.radio("📊 Impact Level", ["Low", "Medium", "High"])
username = st.text_input("👤 User Name (optional)")
user_email = st.text_input("📧 User Email (optional)")
notes = st.text_area("📝 Additional Notes or Logs (optional)", height=100)

# Submission
if st.button("🧠 Generate Ticket Message"):
    prompt = (
        f"You are an IT support assistant. Given the issue description below, format a clean and structured message "
        f"for logging a support ticket.\n\n"
        f"Issue Description: {description}\n"
        f"Affected System: {system}\n"
        f"Impact Level: {impact}\n"
        f"User Name: {username}\n"
        f"User Email: {user_email}\n"
        f"Additional Notes: {notes}"
    )

    with st.spinner("Asking the assistant..."):
        res = requests.post("http://localhost:8000/generate", json={"prompt": prompt})
        output = res.json()["response"]
        st.success("Ticket Message Generated:")
        st.text_area("📋 Output", output, height=300)

# Optional: Add a send-by-email function later
