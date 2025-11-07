import * as React from "react";

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      style={{ padding: "0.5rem 0.9rem", borderRadius: "0.5rem", border: "1px solid #ddd", cursor: "pointer" }}
    >
      {children}
      <>
      <h2>Button from library</h2>
      </>
    </button>
  );
};