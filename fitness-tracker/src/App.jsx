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
        <div className="app-container"></div>
      </section>
    </div>
  )
}

export default App
