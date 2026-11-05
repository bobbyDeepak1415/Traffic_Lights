import React, { useState } from 'react'
import './LoaderComponent.css'

const Loader=({boxNums})=>{
  
}

const LoaderComponent = () => {

  const [boxNums,setBoxNums]=useState(0)

  return (
    <div className='container'>

      <input value={boxNums}/>

      <Loader boxNums={boxNums}/>
      
    </div>
  )
}

export default LoaderComponent
