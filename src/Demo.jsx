import React, { useEffect, useState } from "react";


const Loader=()=>{
  
}

const Demo = () => {

  const [boxInput,setBoxInput]=useState({})

  return <div className="container">

    <input value={boxInput} type="number" onChange={(e)=>setBoxInput(e.target.value)}/>
  </div>
  
};

export default Demo;

