import './App.css';
import AddStep from './components/AddStep';
import ShowStep from './components/ShowStep';
import ResetStep from './components/ResetStep';

function App() {
  return (
    <div className="App">
      <ShowStep />
      <AddStep />
      <ResetStep />
    </div>
  );
}

export default App;
