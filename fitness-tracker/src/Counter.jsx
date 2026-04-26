import { useState } from 'react'
import './App.css'

function Counter({label}) {
    const [count, setCount] = useState(0)

    // create increment
    function increment(){
        setCount(count + 1)
    }

    // create decrement
    function decrement(){
        setCount(count - 1)
    }

    return (
        <div>
             <h2>{label}</h2>
             <div className="counter-box">
                <button className="counter" onClick={decrement}>-</button>
                <p className="count-value">{count}</p>
                <button className="counter" onClick={increment}>+</button>
             </div>
        </div>
    )
}

export default Counter