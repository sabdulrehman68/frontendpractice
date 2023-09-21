import Textform from './components/Textform';
import Navbar from './components/Navbar';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light') //it will tell whether dark modeis enabled or not
  const [alert, setalert] = useState(null)

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'grey';
      showalert("Dark mode has been enabled", "success");
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* /users --> Component 1
          /users/home --> Component 2 */}
            {/* <Route exact path="/about" element = {<About />} /> */}
            {/* <Route exact path="/" element = {  */}
            <Textform showalert={showalert} heading="Enter your text to analyze here" mode={mode} />
          {/* </Routes> */}
          {/* <About/> */}
        </div>
      {/* </Router> */}
    </>
  );
}
export default App;