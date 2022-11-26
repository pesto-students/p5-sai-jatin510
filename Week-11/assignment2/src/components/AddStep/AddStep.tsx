import React from 'react';

export default function AddStep() {
  const handleButtonClick = () => {
    console.log('handleButtonClick');
  };
  return (
    <div>
      <button onClick={handleButtonClick}>Add Step</button>
    </div>
  );
}
