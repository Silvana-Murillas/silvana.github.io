import logo from './logo.svg';
import './App.css';
import { Route,Routes } from "react-router-dom";
import  Home  from './components/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavB from './components/NavB';
import { createContext, useState } from 'react';
export const ThemeContext=createContext(null)
function App() {
  const [theme,setTheme]=useState('light')
  const toggleTheme=()=>{
    setTheme((curr)=>(curr==='light'?"dark":"light"))
  }
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    <div className="App" id={theme}>   
      <Routes>
     <Route  exact path='/' element={<Home/>}/>
     <Route  exact path='/about' element={<About/>}/>
     <Route  exact path='/projects' element={<Projects/>}/>
     <Route exact path='/contact' element={<Contact/>}/>
     </Routes>  
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
