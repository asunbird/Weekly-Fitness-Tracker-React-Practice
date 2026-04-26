import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
              onClick={() => setCount((count) => count + 1)}
            >+
            </button>
            <p className="count-value">{count}</p>
            <button
              className="counter"
              onClick={() => setCount((count) => count - 1)}
            >-
            </button>
          </div>

          <br /><br />

          <h2>Weight Sessions</h2>
          <div className="counter-box">
            <button
              className="counter"
              onClick={() => setCount((count) => count + 1)}
            >+
            </button>
            <p className="count-value">{count}</p>
            <button
              className="counter"
              onClick={() => setCount((count) => count - 1)}
            >-
            </button>
          </div>

          <br /><br />

          <h2>Classes of Water</h2>
          <div className="counter-box">
            <button
              className="counter"
              onClick={() => setCount((count) => count + 1)}
            >+
            </button>
            <p className="count-value">{count}</p>
            <button
              className="counter"
              onClick={() => setCount((count) => count - 1)}
            >-
            </button>
          </div>

        </div>
      </section>
    </div>
  )
}

export default App
