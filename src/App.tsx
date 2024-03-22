import React from 'react';
import { Header } from './layout/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './layout/home/Home';
import { About } from './layout/about/About';
import { Footer } from './layout/footer/Footer';
import { Projects } from './layout/projects/Projects';
import { Contact } from './layout/contact/Contact';



function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/about" element = {<About />}/>
        <Route path = "/projects" element = {<Projects />}/>
        <Route path = "/contact" element = {<Contact />}/>
      </Routes>
    <Footer/>  
    </BrowserRouter>
  );
}

export default App;
