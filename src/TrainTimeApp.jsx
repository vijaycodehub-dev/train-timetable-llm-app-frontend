import React, { useState } from 'react';


function TrainTimeApp() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const askTrainTime = async () => {
    setLoading(true);
    setAnswer('');
    try {
      const res = await fetch('http://localhost:8000/ask-train-time', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
      });
      const data = await res.json();
      setAnswer(data.answer);
    } catch (err) {
      setAnswer('Error: ' + err.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f4f6fb' }}>
      {/* Header */}
      <header style={{ background: '#283593', color: '#fff', padding: '24px 0', textAlign: 'center', boxShadow: '0 2px 8px #e0e0e0' }}>
        <h1 style={{ margin: 0, fontSize: '2.2rem', letterSpacing: '1px' }}>🚆 Mumbai Local Train Inquiry</h1>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 4px 24px #bdbdbd40', padding: 32, minWidth: 350, maxWidth: 500, width: '100%' }}>
          <h2 style={{ color: '#283593', marginBottom: 24, textAlign: 'center' }}>Train Time Q&A</h2>
          <input
            type="text"
            value={question}
            onChange={e => setQuestion(e.target.value)}
            placeholder="Enter your question"
            style={{
              width: '100%',
              padding: '28px 20px',
              fontSize: '1.0rem',
              borderRadius: 10,
              border: '1.5px solid #bdbdbd',
              marginBottom: 24,
              boxSizing: 'border-box',
              height: '120px'
            }}
          />
          <button
            onClick={askTrainTime}
            disabled={loading || !question}
            style={{
              width: '100%',
              padding: '12px 0',
              background: '#283593',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: loading || !question ? 'not-allowed' : 'pointer',
              boxShadow: '0 2px 8px #e0e0e0',
              transition: 'background 0.2s',
              marginBottom: 8
            }}
          >
            {loading ? 'Searching...' : 'Ask'}
          </button>
          {answer && (
            <div style={{ marginTop: 24, background: '#e3f2fd', borderRadius: 8, padding: 16 }}>
              <strong style={{ color: '#1565c0' }}>Answer:</strong>
              <div style={{ marginTop: 8, color: '#333' }}>{answer}</div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ background: '#283593', color: '#fff', textAlign: 'center', padding: '16px 0', fontSize: '1rem', marginTop: 'auto' }}>
        &copy; {new Date().getFullYear()} Mumbai Local Train Inquiry. All rights reserved by Vijay M.
      </footer>
    </div>
  );
}

export default TrainTimeApp;
