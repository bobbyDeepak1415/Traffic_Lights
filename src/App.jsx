import { useState } from 'react'
import Demo from './Demo'

function App() {

  const [name,setName]=useState("Bobby")

  return (
    <>
      <div>
      
       <Demo setName={setName}/>
       {name}
      </div>
     
    </>
  )
}

export default App
