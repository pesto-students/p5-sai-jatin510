import React from 'react';
import { useDispatch } from 'react-redux';
import { resetStep } from '../../redux/actions/stepsAction';

export default function ResetStep() {
  const dispatch = useDispatch();

  const handleResetButtonClick = () => {
    dispatch(resetStep());
  };

  return (
    <div>
      <button onClick={handleResetButtonClick}>Reset Step</button>
    </div>
  );
}
