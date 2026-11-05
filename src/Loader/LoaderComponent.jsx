import React, { useEffect, useState } from 'react'

import './LoaderComponent.css'


const Loader=({boxNums})=>{

  const [activeIndex,setActiveIndex]=useState(0)

  useEffect(()=>{

    if(activeIndex===0) return

    setActiveIndex(0)

    const timer=setInterval(()=>{
setActiveIndex(prev=>(prev+1)%count)
    },800)

    return ()=>clearInterval(timer)

  },[count])

  const count=parseInt(boxNums) ||0

  const localArr=Array.from({length:count})




  return <div className='box_container'>
    {localArr.map((item,index)=>{

const boxColour=activeIndex===index ? "box active_Box" : "box"

      return <div name={item} key={index} className={boxColour}></div>
    })}
  </div>

}

const LoaderComponent = () => {

const [boxNums,setBoxNums]=useState(0)

  return (
    <div className='container'>

      <input value={boxNums} type='number' onChange={(e)=>setBoxNums(e.target.value)}/>
      <Loader boxNums={boxNums}/>
    </div>
  )
}

export default LoaderComponent
