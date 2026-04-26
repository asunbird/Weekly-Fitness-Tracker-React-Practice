import Counter from './Counter'

import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div>
      <section id="hero">
        <img className="icon" src={reactLogo} alt="React logo" />
        <h1 className="title">Weekly Fitness App</h1>


        <div className="app-container">

          <Counter label="Cardio Sessions" />

          <br /><br />

          <Counter label="Weight Sessions" />

          <br /><br />

          <Counter label="Strength Workouts" />

        </div>


      </section>
    </div>
  )
}

export default App
