// src/components/SaveButton.js
import React from 'react';

const SaveButton = ({ onSave }) => {
  return (
    <button
      onClick={onSave}
      style={{
        padding: '12px 24px',
        marginTop: '15px',
        backgroundColor: '#4A90E2',
        backgroundImage: 'linear-gradient(135deg, #4A90E2 0%, #4A4BE2 100%)',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s, transform 0.3s',
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#3A78E2';
        e.target.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = '#4A90E2';
        e.target.style.transform = 'scale(1)';
      }}
    >
      Save Flow
    </button>
  );
};

export default SaveButton;
