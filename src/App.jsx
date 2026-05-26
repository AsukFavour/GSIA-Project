import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./Component/Home'));
const About = lazy(() => import('./Component/About'));
const Academics = lazy(() => import('./Component/Academics'));
const ContactUs = lazy(() => import('./Component/ContactUs'));
const Gallery = lazy(() => import('./Component/Gallery'));
const Calendar = lazy(() => import('./Component/Calendar'));
const Admission = lazy(() => import('./Component/Admission'));
const Payment = lazy(() => import('./Component/Payment'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </Router>
  )
}

export default App
