import React,{useState} from 'react'
import AccordionItems from './AccordionItems';


function Accordion() {
  const [openIndex, setOpenIndex] =useState(null);
  //openIndex tracks which item is currently open (0 = first, 1 = second, etc.)
  // When you click on an item, it runs setOpenIndex(index) from the parent
  //This way, the parent owns the open/close logic, not each child


  return (
    <div>
      
      <AccordionItems 
        title="About"
        isOpen ={openIndex === 0}
        onClick = {() => setOpenIndex(0)} 
      >
        This is the About section.
      </AccordionItems>
      <AccordionItems 
        title="Posts"
        isOpen ={openIndex === 1}
        onClick = {() => setOpenIndex(1)}
      >
        This is the Post section.
        </AccordionItems>
      
    </div>
  )
}

export default Accordion
