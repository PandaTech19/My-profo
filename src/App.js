import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppContext } from "./Mycontext/context";
import { useTranslation } from 'react-i18next';


import Navbar from "./Mycontent/Navigation/nav";
import Head from "./Mycontent/Introduction/head";
import Skills from "./Mycontent/Skills/skills";
import Work from "./Mycontent/My-work/work";
import About from "./Mycontent/About-me/about"
import Contact_me from "./Mycontent/Get-in-touch/contact";
import Footer from "./Mycontent/The_end/foot";
/***************************************************************************************/
import './Styles/App.css';

export default function App() {
  const { t, i18n } = useTranslation()
  // Check if the current lang is Arabic
  const isArabic = i18n.language === "ar";
  // Check if the current lang is Spanish
  const isSpanish = i18n.language === "es";

  //The colors of light and dark mode
  const dark = "#343640";
  const Light = "rgb(227, 245, 247)"

  //This function is used to switch between dark mode and light mode
  const [theme, Settheme] = useState(false);
  const change = () => Settheme(!theme)


  //Changing Language 
  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

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
    AOS.init({ duration: 1000, once: true });

    let x = document.getElementById("Burger");
    let y = document.getElementById("Navbar");
    let a = document.getElementById("Container")

    // Adjust the visibility of Burger based on the route
    if (location.pathname === "/CONTACTS") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
    const handleResize = () => {
      if (window.innerWidth <= 425 && location.pathname === "/CONTACTS") {
        y.style.flexDirection = "row-reverse";
      } else {
        y.style.flexDirection = "row";
      }

      if (window.innerWidth <= 425 && location.pathname === "/CONTACTS") {
        a.style.justifyContent = "flex-start";
      } else {
        a.style.justifyContent = "center";
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [location]);


  console.log(i18n.language);
  return (
    <AppContext.Provider value={{ change, theme, dark, Light, t, i18n, handleLanguageChange, isArabic, isSpanish }}>
      <body style={{ background: theme ? `${dark}` : "" }} className="App">
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
      </body>
    </AppContext.Provider>
  );
}