import "./App.css";
import React from 'react';
import Nav from "./components/navigation/navigation";
import RouterConfig from "./components/routes/routes";

function App() {
  return (
    <div className='container'>
      <Nav />
      <RouterConfig /> 
    </div>
  );
}

export default App;
