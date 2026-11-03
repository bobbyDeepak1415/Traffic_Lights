import React, { useEffect, useState } from 'react'
import './LoaderComponent.css';

const Loader=({boxes})=>{

const [activeIndex,setActiveIndex]=useState(0)

  const count=parseInt(boxes) || 0

let localArr=Array.from({length:count})

useEffect(()=>{
  if(count===0 ) return

  setActiveIndex(0)

  const timer=setInterval(()=>{
    setActiveIndex(prev=>(prev+1)%count)
  },500)

  return ()=>clearInterval(timer)

},[count])





    return <div className='box_div'>
        {localArr.map((item,index)=>{

const boxClass=index === activeIndex ? "box activeBox" : 'box'

return <div key={index} name={item} className={boxClass}></div>
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

