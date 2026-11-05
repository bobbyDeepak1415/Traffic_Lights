import React, { useEffect, useState, useTransition } from 'react'

const Demo = () => {


  const [activeIndex,setActiveIndex]=useState(0)

  const lights=["red","orange","green"]


  useEffect(()=>{

   const timer= setInterval(()=>{
  setActiveIndex(prev=>(prev+1)%lights.length)
    },800)

    return ()=>clearInterval(timer)
  },[lights])




const getcolour=(index)=>{
 return index===activeIndex ? lights[index] : "gray"
}


 

  return (
    <div style={{display:'flex',alignItems:"center",justifyContent:"center",height:"100vh",width:"100vw",backgroundColor:"slategray"}}>
    <div style={{height:"20rem",width:"10rem",border:"1px solid black",gap:"30px",display:"flex",background:"black",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
{lights.map((light,index)=>{
  return <div name={light} key={index} style={{height:"50px",width:"50px",borderRadius:"50%",backgroundColor:getcolour(index)}}></div>
})}
    </div>
    </div>
  )
}

export default Demo
