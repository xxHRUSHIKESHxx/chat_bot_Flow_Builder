// src/components/NodesPanel.js
import React from 'react';

const NodesPanel = ({ onAddNode }) => {
  /**
   * Handles the drag start event for a node.
   * Sets the data to be transferred during the drag and specifies the effect allowed.
   * 
   * @param {Object} event - The drag event object.
   * @param {string} nodeType - The type of node being dragged.
   */
  const handleDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside style={styles.panel}>
      <div
        onDragStart={(event) => handleDragStart(event, 'textNode')}
        draggable
        style={styles.node}
      >
        Text Node
      </div>
    </aside>
  );
};

/**
 * Inline styles for the component.
 */
const styles = {
  panel: {
    padding: '20px',
    backgroundColor: '#f7f7f7',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '98%',

  },
  node: {
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#31af90',
    color: 'white',
    textAlign: 'center',
    fontSize: '14px',
    cursor: 'grab',
    transition: 'background-color 0.3s, transform 0.3s',
    userSelect: 'none', // Prevents text selection while dragging
  },
};

export default NodesPanel;
