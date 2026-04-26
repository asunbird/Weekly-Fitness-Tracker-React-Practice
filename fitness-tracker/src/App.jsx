import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [cardioCount, setCardioCount] = useState(0)
  const [weightCount, setWeightCount] = useState(0)
  const [strengthCount, setStrengthCount] = useState(0)

  return (
    <div>
      <section id="hero">
        <img className="icon" src={reactLogo} alt="React logo" />
        <h1 className="title">Weekly Fitness App</h1>
        <div className="app-container">
          <h2>Cardio Sessions</h2>
          <div className="counter-box">
            <button
              className="counter"
              onClick={() => setCardioCount((count) => count + 1)}
            >+
            </button>
            <p className="count-value">{cardioCount}</p>
            <button
              className="counter"
              onClick={() => setCardioCount((count) => count - 1)}
            >-
            </button>
          </div>

          <br /><br />

          <h2>Weight Sessions</h2>
          <div className="counter-box">
            <button
              className="counter"
              onClick={() => setWeightCount((count) => count + 1)}
            >+
            </button>
            <p className="count-value">{weightCount}</p>
            <button
              className="counter"
              onClick={() => setWeightCount((count) => count - 1)}
            >-
            </button>
          </div>

          <br /><br />

          <h2>Strength Workouts</h2>
          <div className="counter-box">
            <button
              className="counter"
              onClick={() => setStrengthCount((count) => count + 1)}
            >+
            </button>
            <p className="count-value">{strengthCount}</p>
            <button
              className="counter"
              onClick={() => setStrengthCount((count) => count - 1)}
            >-
            </button>
          </div>

        </div>
      </section>
    </div>
  )
}

export default App
