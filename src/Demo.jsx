import React, { useEffect, useState } from "react";

import './Demo.css'


const Loader=({boxNum})=>{

const [activeIndex,setActiveIndex]=useState(0)
  const count=parseInt(boxNum) || 0

  const localArr=Array.from({length:count})



useEffect(()=>{

  if(count===0) return

  // setActiveIndex(0)

const timer=setInterval(()=>{
setActiveIndex(prev=>(prev+1)%count)
},1000)

return ()=>clearInterval(timer)
},[count])



  return <div className="box_container">
    {localArr.map((item,index)=>{

const boxColor= activeIndex===index ? "box activeBox" : "box"
 


      return <div name={item} key={index} className={boxColor}></div>
    })}
  </div>

}

const Demo = () => {

  const [boxInput,setBoxInput]=useState(0)

  return <div className="container">

    <input value={boxInput}  type="number" onChange={(e)=>setBoxInput(e.target.value)}/>

    <Loader boxNum={boxInput}/>
  </div>
  
};

export default Demo;

