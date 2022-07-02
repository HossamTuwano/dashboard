import React from "react";

function Button({ bgColor, color, size, borderRadius }) {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl `}
    >
      Download
    </button>
  );
}

export default Button;
