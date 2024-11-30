import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Academics from './Component/Academics';
import ContactUs from './Component/ContactUs';
import Gallery from './Component/Gallery';
import Calendar from './Component/Calendar';
import Admission from './Component/Admission';
import Payment from './Component/Payment';




function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/academics' element={<Academics/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/calendar' element={<Calendar/>}/>
        <Route path='/admission' element={<Admission/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
    </Router>
  )
}

export default App
