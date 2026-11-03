import React, { useState } from 'react'
import './LoaderComponent.css';

const Loader=({boxes})=>{


  const count=parseInt(boxes) || 0

let localArr=Array.from({length:count})







    return <div className='box_div'>
        {localArr.map((item,index)=>{
return <div key={index} name={item} className='box'></div>
        })}
    </div>
}
const LoaderComponent = () => {
    
  const [boxes,setBoxes]=useState(0)


  return (
    <div className='container'>
      <input value={boxes} type='number' onChange={(e)=>setBoxes(e.target.value)}/>
      <Loader boxes={boxes}/>
    </div>
  )
}

export default LoaderComponent

