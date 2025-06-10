import React,{useState} from 'react'

function HookCounter4() {
  const [items, setItems] = useState([])

  const addItem = () => {
    setItems([...items,{
      id: items.length,
      value: Math.floor(Math.random() * 10) + 1
    }])
    //we first take the current items array, which is an empty array at the start, and then we add a new object to it.
    //The new object has an id which is the current length of the items array, and a value which is a random number between 1 and 10. 
    //firstsly, we use the spread operator to take all the current items in the array and then we add a new object to it.
    //items.length is 0 at the start, so the first item will have an id of 0.
    //The Math.random() function generates a random number between 0 and 1, and we multiply it by 10 to get a number between 0 and 10.
    //This will create a new array with the current items and the new item, and then set the items state to that new array.
  } 
  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {
          items.map(item =>(
            <li key ={item.id}>{item.value}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default HookCounter4
