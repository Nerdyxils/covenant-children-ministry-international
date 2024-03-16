import React, { useState } from 'react';

const ToggleText = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the expanded state
  const toggleIsExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to truncate the text to the first 15 words
  const truncateText = (str, numWords) => str.split(" ").splice(0, numWords).join(" ");

  // Initial text display limit (15 words)
  const displayText = isExpanded ? text : truncateText(text, 15);

  return (
    <div>
      <p>{displayText}</p>
      <button onClick={toggleIsExpanded}>
        {isExpanded ? 'View Less' : 'View More'}
      </button>
    </div>
  );
};

export default ToggleText;
