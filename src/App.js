import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Content from './components/content/Content';
import Sports from './components/sports/Sports';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Business from './components/business/Business';
import World from './components/world/World';
import Entertainment from './components/entertainment/Entertainment';
import Technology from './components/technology/Technology';
import Health from './components/health/Health';

function App() {
  return (
    <>

  <Router>
  <Navbar/>

  <Routes>

    <Route path='/' element={<Content/>}/>
    <Route path='/sports' element={<Sports/>}/>
    <Route path='/business' element={<Business/>}/>
    <Route path='/worlds' element={<World/>}/>
    <Route path='/entertainments' element={<Entertainment/>}/>
    <Route path='technologys' element={<Technology/>}/>
    <Route path='/healths' element={<Health/>}/>

  </Routes>
  </Router>

    </>
  );
}

export default App;
