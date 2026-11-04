import React, { useEffect, useState } from "react";

const Demo = () => {

  const colors=["red","orange","green","blue"]

  const [activeIndex,setActiveIndex]=useState(0)


  useEffect(()=>{
    const timer=setInterval(()=>{

      setActiveIndex(prev=>(prev+1))
    },1000)

    return ()=>clearInterval(timer)

  },[colors])


  const getColor=(index)=>{

    return activeIndex===index ? colors[index] :"gray"

  }

  return <div style={{height:"50vh",width:"50vw",border:"1px solid black",margin:"auto",marginTop:"50px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
{colors.map((color,index)=>{
  return <div key={index} name={color} style={{height:"60px",width:'60px',backgroundColor:getColor(index),margin:"20px",borderRadius:"50%"}}></div>
})}



  </div>;
};

export default Demo;
