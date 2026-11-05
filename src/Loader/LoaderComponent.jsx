import React, { useEffect, useState } from 'react'
import './LoaderComponent.css'

const Loader=({boxNums})=>{

const [activeIndex,setActiveIndex]=useState(0)

  const count=parseInt(boxNums) || 0

  const localArr=Array.from({length:count})


  useEffect(()=>{

    if(count===0) return

    setActiveIndex(0)

const timer=setInterval(()=>{
setActiveIndex(prev=>(prev+1)%count)
},800)

return ()=>clearInterval(timer)

  },[count])

  return <div className='box_container'>
{localArr.map((item,index)=>{

const box_Color=activeIndex===index ? "box active_Box" :"box"

return <div className={box_Color} key={index} name={item}></div>
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
