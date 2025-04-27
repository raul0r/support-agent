import { useState } from 'react';
import { generateDraft } from '../api/api';

function TicketForm({ setDraft }) {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Email');
  const [impact, setImpact] = useState('Medium');
  const [urgency, setUrgency] = useState('Medium');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const fullPrompt = `
    Problem Description: ${description}
    Category: ${category}
    Impact: ${impact}
    Urgency: ${urgency}
    `;
    const response = await generateDraft(fullPrompt);
    setDraft(response);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <textarea
        className="w-full border p-2 rounded"
        placeholder="Describe the problem..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <div className="flex space-x-4">
        <select className="border p-2 rounded w-1/3" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Email</option>
          <option>Network</option>
          <option>Printer</option>
          <option>Application</option>
          <option>Other</option>
        </select>
        <select className="border p-2 rounded w-1/3" value={impact} onChange={(e) => setImpact(e.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <select className="border p-2 rounded w-1/3" value={urgency} onChange={(e) => setUrgency(e.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        {loading ? 'Drafting Ticket...' : 'Draft Ticket'}
      </button>
    </form>
  );
}

export default TicketForm;
