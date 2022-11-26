import { useDispatch, useSelector } from 'react-redux';
import { roomToggleLight } from './actions/roomActions';
import { IRoomState } from './reducers/roomReducer';

function Room() {
  const isRoomLightOn = useSelector<IRoomState>((state) => state.isRoomLightOn);
  const dispatch = useDispatch();

  const lightedness = isRoomLightOn ? 'lit' : 'dark';

  const flipLight = () => {
    dispatch(roomToggleLight());
  };

  return (
    <div className={`room ${lightedness}`}>
      the room is {lightedness}
      <br />
      <button onClick={flipLight}>flip</button>
    </div>
  );
}

export default Room;
