import React from 'react';

export default function ResetStep() {
  const handleButtonClick = () => {
    console.log('handleButtonClick');
  };
  return (
    <div>
      <button onClick={handleButtonClick}>Reset Step</button>
    </div>
  );
}
