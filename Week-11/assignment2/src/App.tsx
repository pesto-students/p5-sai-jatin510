import './App.css';
import AddStep from './components/AddStep';
import ShowStep from './components/ShowStep';
import ResetStep from './components/ResetStep';
import { useDispatch, useSelector } from 'react-redux';
import { IStepsState } from './redux/reducers/stepReducer';

function App() {
  const steps = useSelector<IStepsState>((state) => state.steps);

  return (
    <div className="App">
      <ShowStep steps={steps} />
      <AddStep />
      <ResetStep />
    </div>
  );
}

export default App;
