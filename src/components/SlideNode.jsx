import React from "react";

const SlideNode = ({ data, selected }) => {
  return (
    <div
      style={{
        padding: "12px",
        width: 180,
        borderRadius: 8,
        background: "#fff",
        border: selected ? "2px solid #2563eb" : "1px solid #ccc",
        boxShadow: selected
          ? "0 4px 12px rgba(37,99,235,0.3)"
          : "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h4 style={{ margin: 0 }}>{data.title}</h4>
      <p style={{ fontSize: 13 }}>{data.description}</p>
    </div>
  );
};

export default SlideNode;
