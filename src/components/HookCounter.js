import React, {useState} from 'react'

function HookCounter() {
//count is a state variable, setCount is a method to update the count, count is initialized to 0

  const [count, setCount] =useState(0)
  return (
    <div>
      <button onClick ={() =>setCount(count+1)}> Count {count}</button>
    </div>
  )
}

export default HookCounter
