import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AppContext } from "./Mycontext/context";
import Navigation from "./Mycontent/Navigation/nav";
import Head from "./Mycontent/Introduction/head";
import Skills from "./Mycontent/Skills/skills";
import Work from "./Mycontent/My-work/work";
import About from "./Mycontent/About-me/about"
import Contact_me from "./Mycontent/Get-in-touch/contact";
import Footer from "./Mycontent/The_end/foot"
/***************************************************************************************/
import './Styles/App.css';

export default function App() {

  //The colors of light and dark mode
  const dark = "#212121";
  const Light = "rgb(227, 245, 247)"

  //This function is used to switch between dark mode and light mode
  const [theme, Settheme] = useState(false);
  const change = () => Settheme(!theme)

  // This function is used to stop the scrolling when opening the side bar on the mobile
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#menu') {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  });

  //This function is used to remove the burger menu on route change
  const location = useLocation();//This function detects your current url
  useEffect(() => {
    let x = document.getElementById("Burger")
    if (location.pathname === "/CONTACTS") {
      x.style.display = "none"
    }
    else {
      x.style.display = "flex"
    }
  }, [location]);


  return (
    <AppContext.Provider value={{ change, theme, dark, Light }}>
      <body style={{ background: theme ? `${dark}` : "" }} className="App">
        <Navigation />
        <Routes>
          <Route exact path='/' element={
            <>
              <Head />
              <section className='divider' />
              <Skills />
              <section className='divider' />
              <Work />
              <section className='divider' />
              <About />
            </>
          } />
          <Route exact path="/CONTACTS" element={<Contact_me />} />
        </Routes>
        <Footer />
      </body>
    </AppContext.Provider>
  );
}
