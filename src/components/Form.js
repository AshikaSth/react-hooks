import React, {useState, useEffect} from 'react'

function Form() {
  const [name, setName]= useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    alert(`Hello ${name}`)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
          <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        </label>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Form

