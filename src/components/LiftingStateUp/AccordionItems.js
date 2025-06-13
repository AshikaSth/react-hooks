import React from 'react'

function AccordionItems({title, children, isOpen, onClick}) {
  return (
    <div>
      <h3 onClick = {onClick}>
        {title}
      </h3>
      {isOpen && <p>{children}</p>}
    </div>
  )
}

export default AccordionItems
