import axios from 'axios';

export const generateDraft = async (prompt) => {
  try {
    const response = await axios.post('http://localhost:8000/generate', { prompt });
    return response.data.response;
  } catch (error) {
    console.error("Error generating draft:", error);
    return "⚠️ Failed to generate ticket draft.";
  }
};
