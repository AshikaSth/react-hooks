import React,{useState, useEffect} from 'react'

function IntervalEffectCounter() {
  const [count, setCount] = useState(0);

  const tick =() =>{
    // setCount(count + 1)
    setCount(prevCount => prevCount + 1); // using functional update to ensure we get the latest state
  }

  

  useEffect(() => {
   
    const interval = setInterval(tick, 1000);

    return () =>{
      clearInterval(interval);
    }
  // }, [count])
  }, []);


  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalEffectCounter
