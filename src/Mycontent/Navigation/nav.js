import React, { useContext } from "react";
import { AppContext } from "../../Mycontext/context";
import { HashLink } from "react-router-hash-link";
import { Link } from 'react-router-dom';
import Logo from "./logo.jpg";
import Menu from "./burger.jpg";
import Close from "./cross.jpg";
import { RiSunFill } from "react-icons/ri";
import { BsMoonFill } from "react-icons/bs";


export default function Nav() {
    const { theme, change, Light, dark, t, i18n, isSpanish, handleLanguageChange } = useContext(AppContext);
    const Navigation = t("Navigation_links", { returnObjects: true });

    return (
        <div className="All-container">
            <div id="Navbar" className="Navbar">
                <div id="Container" className="Navbar__logo-container">
                    <Link smooth to="/">
                        <img
                            src={Logo}
                            alt="My logo site"
                            className="Navbar__logo"
                            style={{ border: theme ? `4px solid ${Light}` : "" }}
                        />
                    </Link>
                </div>
                <div className={`Navbar__link-container ${isSpanish ? "Navbar__link-container--esp" : ""}`}>
                    <HashLink
                        style={{ color: theme ? `${Light}` : "" }}
                        className="Navbar__links"
                        smooth
                        to="/#Skills">
                        {Navigation[0]}
                    </HashLink>
                    <HashLink
                        style={{ color: theme ? `${Light}` : "" }}
                        className="Navbar__links"
                        smooth
                        to="/#projects">
                        {Navigation[1]}
                    </HashLink>
                    <HashLink
                        style={{ color: theme ? `${Light}` : "" }}
                        className="Navbar__links"
                        smooth
                        to="/#about">
                        {Navigation[2]}
                    </HashLink>
                    <Link
                        style={{ color: theme ? `${Light}` : "" }}
                        className="Navbar__links"
                        smooth to="/CONTACTS">
                        {Navigation[3]}
                    </Link>
                </div>
                <div className="Navbar__theme_and-lang">
                    {
                        <nav onClick={() => change()}>
                            {theme === false ?
                                <BsMoonFill className="Navbar__moon" />
                                :
                                <RiSunFill className="Navbar__icon" />
                            }
                        </nav>
                    }
                    <select
                        className="Navbar__Select-con"
                        onChange={handleLanguageChange}
                        defaultValue={i18n.language}
                        style={{ color: theme ? "" : `${Light}`, background: theme ? "" : `${dark}` }}
                    >
                        <option value="en">English</option>
                        <option value="ar">Arabic</option>
                        <option value="es">Spanish</option>
                    </select>
                </div>
                {/* The Burger menu entering tablet */}
                <div id="Burger" className="Navbar__burger">
                    <a href="#menu">
                        <img
                            src={Menu}
                            alt="The burger menu"
                            className="Navbar__menu-hide"
                        />
                    </a>
                </div>
            </div>
            <section id="menu" className="Menu">
                <div className="Menu__contanier">
                    <a href="/#">
                        <img src={Close}
                            alt="This closes the menu"
                            className="Menu__close"
                        />
                    </a>
                    <select
                        className="Navbar__Select-con--mobile"
                        onChange={handleLanguageChange}
                        defaultValue={i18n.language}
                        style={{ color: theme ? "" : `${Light}`, background: theme ? "" : `${dark}` }}
                    >
                        <option value="en">English</option>
                        <option value="ar">Arabic</option>
                        <option value="es">Spanish</option>
                    </select>
                </div>

                <div className="Menu__link-container">
                    <a
                        className="Menu__links"
                        href="/#Skills">
                        {Navigation[0]}
                    </a>
                    <a
                        className="Menu__links"
                        href="#projects">
                        {Navigation[1]}

                    </a>
                    <a
                        className="Menu__links"
                        smooth
                        href="#about">
                        {Navigation[2]}

                    </a>
                    <a
                        className="Menu__links"
                        href="/CONTACTS">
                        {Navigation[3]}
                    </a>
                </div>
            </section>
        </div>
    );
}