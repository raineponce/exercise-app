import { useState } from 'react'
import './App.css'
// import HomeScreen from './components/HomeScreen'
import DurationExercise from './components/DurationExercise';
import RepetitionExercise from './components/RepetitionExercise';


function App() {

  // const [seeHome, setSeeHome] = useState(true);
  const [seePushups, setSeePushups] = useState(false);
  const [seeRunning, setSeeRunning] = useState(false);
  const [seePlank, setSeePlank] = useState(false);

  const togglePushups = () => {
    setSeePushups(true)
  }

  const toggleRunning = () => {
    setSeeRunning(true)
  }

  const togglePlank = () => {
    setSeePlank(true)
  }

  return (
    <>
      {/* <HomeScreen isVisible={seeHome} /> */}
      <h1>Get Moving!</h1>
      <p>Choose an exercise: </p>

      {/* buttons */}
      <button onClick={togglePushups}>
        Pushups
      </button>

      <button onClick={toggleRunning}>
        Running
      </button>

      <button onClick={togglePlank}>
        Plank
      </button>
      <RepetitionExercise name="Pushups" isVisible={seePushups} />
      <DurationExercise name="Running" isVisible={seeRunning} />
      <RepetitionExercise name="Plank" isVisible={seePlank} />

    </>
  )
}

export default App
