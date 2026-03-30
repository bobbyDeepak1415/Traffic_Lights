import { useState } from 'react'
import Demo from './Demo'

function App() {

  const [count,setCount]=useState(0)

  return (
    <>
      <div>
      
       <Demo setCount={setCount}/>
       {count}
      </div>
     
    </>
  )
}

export default App
