import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import App from "./App.jsx";
// import LoaderComponent from "./Loader/LoaderComponent.jsx";
import Demo from './Demo.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <LoaderComponent/> */}

    <Demo/> 
  </StrictMode>,
);
