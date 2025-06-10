import React,{useState, useEffect} from 'react'

function EffectMouse() {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition  = e =>{
    console.log('Mouse event')
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(()=>{
    console.log('useEffect called')
    window.addEventListener('mousemove', logMousePosition);
  },[]); // empty dependency array means this effect will only run once after the initial render, similar to componentDidMount in class components
  return (
    <div>
      Hooks X- {x} Y -{y}
    </div>
  )
}

export default EffectMouse
