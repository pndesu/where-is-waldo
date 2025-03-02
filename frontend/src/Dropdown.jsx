import React, { useState } from "react";
import "./styles/Dropdown.css";

export const Dropdown = React.memo(({ x, y, boxWidth = 50, boxHeight = 50, gap = 8, isOpen, handleToggleDropdown }) => {

  const dropdownOptions = ["Da Vinci", "Kahlo", "Van Gogh", "Warhol", "Picasso"];
  // Calculate the dropdown container position:
  // - The ClickBox is centered at (x, y) with width and height.
  // - Its right edge is at x + boxWidth/2.
  // - Place the toggle button to the right of that edge by adding gap.
  // - Align the top of the dropdown with the top of the ClickBox (y - boxHeight/2).
  const containerStyle = {
    top: y - boxHeight / 2,
    left: x + boxWidth / 2 + gap,
  };

  return (
    <div className="dropdown-container" style={containerStyle}>
      <button className="dropdown-toggle" onClick={handleToggleDropdown}>
        Who is it? ▼
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {dropdownOptions.map((option, idx) => (
            <li
              key={idx}
              className="dropdown-item"
              onClick={() => {
                console.log(`Clicked: ${option}`);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

