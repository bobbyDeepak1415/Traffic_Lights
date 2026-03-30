

import React from 'react'

const Demo = (props) => {

    let title="Deepak"
  return (
    <div>
      <button onClick={()=>props.setName(title)}>Click from child</button>
    </div>
  )
}

export default Demo
