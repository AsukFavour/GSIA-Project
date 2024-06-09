import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Academics from './Component/Academics';
import ContactUs from './Component/ContactUs';
import Gallery from './Component/Gallery';
import Calendar from './Component/Calendar';


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/academics' element={<Academics/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/calender' element={<Calendar/>}/>
      </Routes>
    </Router>
  )
}

export default App
