// ClickBox.jsx
import React from "react";

export const ClickBox = ({
  x,
  y,
  width = 50,
  height = 50,
  border = "2px solid red",
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: y,
        left: x,
        width: `${width}px`,
        height: `${height}px`,
        border: border,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* You can add content inside the box if needed */}
    </div>
  );
};

