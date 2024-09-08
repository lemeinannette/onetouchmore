import  React  from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './Home'
import About from './About'
import FAQs from './FAQs'
function App() {
  
  return (
    <>
    <Home/>
    <About/>
    <FAQs/>
    </>
  )
}

export default App  ;
