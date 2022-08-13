import React,{useState}  from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [btntext, setbtntext] = useState("Light Mode")
  const [buttontext, setbuttontext] = useState("Light Mode")
  const [alert, setalert] = useState(null)
  const showAlert = (message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor = '#042743';
      setbtntext("Dark Mode")
      showAlert("Dark mode enables", "light")
    }
    
    else{
      setmode('light')
      setbtntext("Light Mode")
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enables", "dark")
    }
  }

  const RedMode=()=>{
    if(mode==='light'){
      setmode('danger')
      document.body.style.backgroundColor = '#C0392B';
      setbuttontext("Red Mode")
      showAlert("Red mode enables", "light")
    }
    
    else{
      setmode('light')
      setbuttontext("Light Mode")
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enables", "dark")
    }
  }


  return (
    <>
    <Router>
      <Navbar title="Text Changer" AboutText="About Us" mode={mode} RedMode={RedMode} toggleMode={toggleMode} btntext={btntext} buttontext={buttontext}/>
      <Alert alert={alert} />
      <div className="container my-3">
      <Switch>
        <Route path='/home'>
      <Textform showAlert={showAlert} heading="Enter your text to analyze below" mode={mode}/>
      </Route>
      <Route path='/about'>
      <About mode={mode}/>
      </Route>
      </Switch> 
      </div>
      </Router>
    </>
  );
}

export default App;
