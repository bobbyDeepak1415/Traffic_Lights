// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import './index.css'
// // import App from './App.jsx'
// import Demo from './Demo.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <App />
//      */}
//     <Demo/>
//   </StrictMode>,
// )

const obj = [
  { name: "Bob" },
   { name: "Deepak" },
  { name: "Kai" },
   { name: "Sharma" },
   { name: "Reddy" },
  { name: "ANaidu" },
];

const sorted=Object.values(obj)

console.log(sorted.map((client)=>client.name).sort())