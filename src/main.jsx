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
  { name: "Bob", age: 30 },
  { name: "Deepak", age: 25 },
  { name: "Kai", age: 35 },
  { name: "Sharma", age: 60 },
  { name: "Reddy", age: 65 },
  { name: "ANaidu", age: 20 },
];

const clients = Array.from(obj.map((client) => client.name));

const candidates=obj.map((obj)=>obj.name)

console.log(clients);
console.log(candidates);
