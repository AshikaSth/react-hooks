import React, {use, useState} from 'react'

function Form() {
  // const [name, setName]= useState("");
  // const [textarea, setTextarea] = useState("I am a ... ");
  // const [car, setCar] = useState("Volvo");

  // const handleChange = (e) => {
  //   setTextarea(e.target.value);
  // }

  // const handleCarChange = (e) => {
  //   setCar(e.target.value);
  // }
  //   const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   alert(`Hello ${name}. 
  //     ${textarea} I want to buy a ${car}.`);
  // }

    const handleSubmit = (e) =>{
    e.preventDefault();
    alert(`My name is ${inputs.name}. 
      ${inputs.textarea} I want to buy a ${inputs.car}.`);
  }
  const handleChange = (e) => {
    const {name, value} =e.target; // destructuring
    setInputs(values => ({...values, [name]: value}));
  }

  const [inputs, setInputs] = useState({
    name :"",
    textarea : "I am a ...",
    car:"Volvo"
  })
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
          <input type="text" name ="name" value={inputs.name} onChange={handleChange}/>
        </label>
        <label>Tell me something about yourself:
          <textarea name="textarea" value ={inputs.textarea} onChange={handleChange}/>
        </label>
        <label>Choose a car:
          <select name ="car" value ={inputs.car} onChange={handleChange}>
            <option value="Ford">Volvo</option>
                        <option value="Ford">Ford</option>

            <option value="BMW">BMW</option>

            <option value="Volkswagen">Volkswagen</option>


            
          </select>
        </label>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Form

