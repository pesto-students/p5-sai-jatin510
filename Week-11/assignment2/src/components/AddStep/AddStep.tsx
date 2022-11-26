import React from 'react';
import { useDispatch } from 'react-redux';
import { addStep } from '../../redux/actions/stepsAction';

export default function AddStep() {
  const dispatch = useDispatch();

  const handleAddStepButtonClick = () => {
    dispatch(addStep());
  };

  return (
    <div>
      <button onClick={handleAddStepButtonClick}>Add Step</button>
    </div>
  );
}
