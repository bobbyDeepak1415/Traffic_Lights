import React from 'react'

const Demo = () => {

  const lights=["red","orange","green"]



  return (
    <div style={{display:'flex',alignItems:"center",justifyContent:"center",flexDirection:"column",height:"100vh",width:"100vw",backgroundColor:"slategray"}}>
    <div style={{height:"20rem",width:"10rem",border:"1px solid black",background:"black"}}>
{lights.map((light))}
    </div>
    </div>
  )
}

export default Demo
