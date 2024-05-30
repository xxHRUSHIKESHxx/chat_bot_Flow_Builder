// src/components/SettingsPanel.js
import React from 'react';

const SettingsPanel = ({ selectedNode, onUpdateNode }) => {
  /**
   * Handles the change event for the input field.
   * Updates the selected node's label with the new value from the input field.
   * 
   * @param {Object} event - The change event object.
   */
  const handleChange = (event) => {
    const updatedNode = { 
      ...selectedNode, 
      data: { 
        ...selectedNode.data, 
        label: event.target.value 
      } 
    };
    onUpdateNode(updatedNode);
  };

  // If no node is selected, render nothing
  if (!selectedNode) {
    return null;
  }

  return (
    <aside style={styles.panel}>
      <h3 style={styles.heading}>Node Settings</h3>
      <input
        type="text"
        value={selectedNode.data.label}
        onChange={handleChange}
        style={styles.input}
      />
    </aside>
  );
};

/**
 * Inline styles for the component.
 */
const styles = {
  panel: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fafafa',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    marginTop: '10px',
  },
  heading: {
    margin: '0 0 10px 0',
    fontSize: '18px',
    color: '#333',
  },
  input: {
    width: '80%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
  },
};

export default SettingsPanel;
