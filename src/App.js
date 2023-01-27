import logo from './logo.svg';
import './App.css';
import { Route,Routes } from "react-router-dom";
import  Home  from './components/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Routes>
     <Route  exact path='/' element={<Home/>}/>
     <Route  exact path='/about' element={<About/>}/>
     <Route  exact path='/projects' element={<Projects/>}/>
     <Route exact path='/contact' element={<Contact/>}/>
     </Routes>
    </div>
  );
}

export default App;
