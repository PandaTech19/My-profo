import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AppContext } from "./Mycontext/context";
import Navbar from "./Mycontent/Navigation/nav";
import Navbar_arb from "./Mycontent/Navigation/nav-arb";
import Head from "./Mycontent/Introduction/head";
import Head_arb from "./Mycontent/Introduction/head_arb";
import Skills from "./Mycontent/Skills/skills";
import Skills_arb from "./Mycontent/Skills/skills_arb";
import Work from "./Mycontent/My-work/work";
import Work_arb from "./Mycontent/My-work/work_arb";
import About from "./Mycontent/About-me/about"
import About_arb from "./Mycontent/About-me/about_arb";
import Contact_me from "./Mycontent/Get-in-touch/contact";
import Contact_arb from "./Mycontent/Get-in-touch/contact_arb";
import Footer from "./Mycontent/The_end/foot";
import Footer_arb from "./Mycontent/The_end/foot_arb";
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


  //This function switches between Arabic and english 
  const [page, setPage] = useState(
    <>
      <Navbar />
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
    </>
  );

  const Eng = () => setPage(
    <>
      <Navbar />
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
    </>
  );

  const Arb = () => setPage(
    <>
      <Navbar_arb />
      <Routes>
        <Route exact path='/' element={
          <>
            <Head_arb />
            <section className='divider' />
            <Skills_arb />
            <section className='divider' />
            <Work_arb />
            <section className='divider' />
            <About_arb />
          </>
        } />
        <Route exact path="/CONTACTS" element={<Contact_arb/>} />
      </Routes>
      <Footer_arb />
    </>
  );

  return (
    <AppContext.Provider value={{ change, theme, dark, Light, page, Eng, Arb }}>
      <body style={{ background: theme ? `${dark}` : "" }} className="App">
        {page}
      </body>
    </AppContext.Provider>
  );
}
