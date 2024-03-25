import React from 'react';
import { Header } from './layout/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './layout/home/Home';
import { About } from './layout/about/About';
import { Footer } from './layout/footer/Footer';
import { Projects } from './layout/projects/Projects';
import { Contact } from './layout/contact/Contact';
import { Main } from './layout/main/Main';
import styled from 'styled-components';

const homePageData = {
  greeting:"Hi all. I am",
  headLine:"Pavel Retynskih",
  mainTitle:"Front-end developer",
  link:"https://github.com/Pavel-Retunskih"
}

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route  element = {<Main />}>
              <Route path='/'  element = {<Home {...homePageData}/>}/>
              <Route path = "about" element = {<About />}/>
              <Route path = "projects" element = {<Projects />}/>
              <Route path = "contact" element = {<Contact />}/>
          </Route>
      </Routes>
      <Footer/>  
    </BrowserRouter>

  );
}

const AppWrap = styled.div``

export default App;
