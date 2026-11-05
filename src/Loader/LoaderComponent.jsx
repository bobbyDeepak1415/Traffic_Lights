import React, { useState } from 'react'

import './LoaderComponent.css'


const Loader=()=>{
  
}

const LoaderComponent = () => {

const [boxNums,setBoxNums]=useState(0)

  return (
    <div className='container'>
      <input value={boxNums} type='number' onChange={(e)=>setBoxNums(e.target.value)}/>
      <Loader/>
    </div>
  )
}

export default LoaderComponent
