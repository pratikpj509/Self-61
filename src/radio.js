import React, { useState } from 'react';

function RadioTransform() {
  const [text, setText] = useState('');
  const [caseType, setCaseType] = useState('uppercase');

  const transformText = (str, type) => {
    switch (type) {
      case 'uppercase':
        return str.toUpperCase();
      case 'lowercase':
        return str.toLowerCase();
      case 'titlecase':
        return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
      default:
        return str;
    }
  };

  return (
    <div>
      <h2>Text Transform</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <div>
        <label>
          <input
            type="radio"
            value="uppercase"
            checked={caseType === 'uppercase'}
            onChange={(e) => setCaseType(e.target.value)}
          />
          Uppercase
        </label>
        <label>
          <input
            type="radio"
            value="lowercase"
            checked={caseType === 'lowercase'}
            onChange={(e) => setCaseType(e.target.value)}
          />
          Lowercase
        </label>
        <label>
          <input
            type="radio"
            value="titlecase"
            checked={caseType === 'titlecase'}
            onChange={(e) => setCaseType(e.target.value)}
          />
          Title Case
        </label>
      </div>
      <p>Transformed Text: {transformText(text, caseType)}</p>
    </div>
  );
}

export default RadioTransform;
