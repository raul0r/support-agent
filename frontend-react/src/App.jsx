import { useState } from 'react';
import TicketForm from './components/TicketForm';
import DraftPreview from './components/DraftPreview';

function App() {
  const [draft, setDraft] = useState('');
  
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🛠️ L1 Support Assistant</h1>
      <TicketForm setDraft={setDraft} />
      {draft && <DraftPreview draft={draft} />}
    </div>
  );
}

export default App;
