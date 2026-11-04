import React, { useEffect, useState } from "react";

import './Demo.css'


const Loader=({boxNum})=>{


  const count=parseInt(boxNum) || 0

  const localArr=Array.from({length:count})

  return <div className="box_container">
    {localArr.map((item,index)=>{
      return <div name={item} key={index} className="box"></div>
    })}
  </div>

}

const Demo = () => {

  const [boxInput,setBoxInput]=useState({})

  return <div className="container">

    <input value={boxInput}  type="number" onChange={(e)=>setBoxInput(e.target.value)}/>

    <Loader boxNum={boxInput}/>
  </div>
  
};

export default Demo;

