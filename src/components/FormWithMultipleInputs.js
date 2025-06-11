import React,{useState} from 'react'

function FormWithMultipleInputs() {
  const [inputs, setInputs] = useState({});

  const handleChange =(e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]:value}))
  }

  const handleSubmit =(e) =>{
    alert(`Hello ${inputs.name}, you are ${inputs.age} years old`);
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
          <input 
            type="text" 
            name="name" 
            value={inputs.name || ''} 
            onChange={handleChange} 
          />

        </label>
        <label>Enter your age:
          <input type="number" name="age" value={inputs.age || ""} onChange={handleChange}/>
        </label>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default FormWithMultipleInputs
