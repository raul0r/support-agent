function DraftPreview({ draft }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-2xl font-semibold mb-4">📋 Ticket Draft Preview</h2>
        <textarea
          className="w-full border p-4 rounded h-80"
          value={draft}
          readOnly
        />
      </div>
    );
  }
  
  export default DraftPreview;
  