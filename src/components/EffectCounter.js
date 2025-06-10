import React,{useState, useEffect} from 'react'

function EffectCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
useEffect(() => {
  document.title =`You clicked ${count} times`; 
  console.log('useEffect-Updating document title');
}, [count])// useEffect takes two arguments, the first is a function that will be executed after the component renders, the second is an array of dependencies.
// the second argument is optional, if not provided, the function will be executed after every render. if provided, the function will be executed only when the values in the array change.
// when using useEffect, we are saying to execute the function passed as an argument everytime the component renders
//useEffect runs everytimes after the component renders, which is similar to componentDidMount and componentDidUpdate in class components
//we can access the state and props without having to write any additional code

  return (
    <div>
      <input type = "text" value={name} onChange ={(e) => setName(e.target.value)}/>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
      
    </div>
  )
}

export default EffectCounter
//how to use useEffect: !.import useEffect from react. 2. call it within the compoennt 3. pass a function as an argument which needs to be executed after the component renders. 
// in this case, we are updating the document title with the count value after the initial render and every subsequent render