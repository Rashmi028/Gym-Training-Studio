import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Home.jsx'
import Header from './Header.jsx'
import About from './About.jsx'
import Classes from './Classes.jsx'
import Schedule from './Schedule.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

   <>
  <Header />
  <Home />
  <About/>
  <Classes/>
  <Schedule/>
  <Contact/>
  <Footer/>
   </>
 
)
