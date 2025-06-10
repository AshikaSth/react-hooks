import React, {useState} from 'react'

function HookCounter2() {

  const initialCount = 0
  const [count, setCount] = useState(initialCount)

  const incrementfive = () => {
    for (let i =0; i<5; i++){
      // setCount(count+1)
      // This will not work as expected because setCount is asynchronous
      // and the value of count will not be updated immediately.  
      setCount(prevCount => prevCount + 1)
      // This will work as expected because we are using the previous state value
      // prevCount is the previous value of count
    }
  }
  return (
    <div>
      Count :{count}
      <button onClick={() => setCount(initialCount) }>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
      <button onClick={incrementfive}>Increment 5</button>
    </div>
  )
}

export default HookCounter2
