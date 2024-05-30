// src/App.js
import React, { useState, useCallback } from "react";
import "./App.css";
import NodesPanel from "./components/NodesPanel";
import FlowCanvas from "./components/FlowCanvas";
import SettingsPanel from "./components/SettingsPanel";
import SaveButton from "./components/SaveButton";
import { ReactFlowProvider } from "reactflow";

const App = () => {
  const [nodes, setNodes] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  const onUpdateNode = useCallback((updatedNode) => {
    setNodes((nds) =>
      nds.map((node) => (node.id === updatedNode.id ? updatedNode : node))
    );
    setSelectedNode(updatedNode);
  }, []);

  const onSave = useCallback(() => {
    const unconnectedNodes = nodes.filter(
      (node) => !node.targetEdges || node.targetEdges.length === 0
    );
    if (unconnectedNodes.length > 1) {
      alert("More than one node has no connections.");
    } else {
      console.log("Flow saved:", nodes);
    }
  }, [nodes]);

  return (
    <ReactFlowProvider>
      <div className="App">
        <div style={{display: 'flex', flexDirection: 'column'}} >
          {selectedNode ? (
            <SettingsPanel
              selectedNode={selectedNode}
              onUpdateNode={onUpdateNode}
            />
          ) : (
            <NodesPanel
              onAddNode={(node) => setNodes((nds) => nds.concat(node))}
            />
          )}
          <SaveButton onSave={onSave} />
        </div>

        <FlowCanvas
          nodes={nodes}
          setNodes={setNodes}
          onNodeSelect={setSelectedNode}
        />
      </div>
    </ReactFlowProvider>
  );
};

export default App;
