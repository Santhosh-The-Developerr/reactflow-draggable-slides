import React, { useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  Controls,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";
import SlideNode from "./components/SlideNode";

const nodeTypes = {
  slideNode: SlideNode,
};

const initialNodes = [
  {
    id: "1",
    type: "slideNode",
    position: { x: 100, y: 100 },
    data: { title: "Slide 1", description: "First slide content" },
  },
  {
    id: "2",
    type: "slideNode",
    position: { x: 400, y: 200 },
    data: { title: "Slide 2", description: "Second slide content" },
  },
];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background gap={16} />
      </ReactFlow>
    </div>
  );
}
