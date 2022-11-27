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
    const { theme, change, Light, Eng, Arb } = useContext(AppContext);
    return (
        <div className="All-conatainer">
            <div className="Navbar">
                <div className="Navbar__logo-container">
                    <Link smooth to="/">
                        <img
                            src={Logo}
                            alt="My logo site"
                            className="Navbar__logo"
                            style={{ border: theme ? `4px solid ${Light}` : "" }}
                        />
                    </Link>
                    <div className="Navbar__test" style={{ borderBottom: theme ? `3px solid ${Light}` : "" }}>
                        <button
                            style={{ color: theme ? `${Light}` : "" }}
                            onClick={() => Eng()}
                            className="Navbar__btn ">
                            Eng
                        </button>
                        <span className="Navbar__slash" style={{ color: theme ? `${Light}` : "" }} >/</span>
                        <button onClick={() => Arb()} className="Navbar__btn Navbar__btn--blue">Arb</button>
                    </div>
                </div>
                <div className="Navbar__link-container">
                    <HashLink
                        style={{ color: theme ? `${Light}` : "" }}
                        className="Navbar__links"
                        smooth
                        to="/#Skills">
                        المهارات
                    </HashLink>
                    <HashLink
                        style={{ color: theme ? `${Light}` : "" }}
                        className="Navbar__links"
                        smooth
                        to="/#projects">
                        المشاريع
                    </HashLink>
                    <HashLink
                        style={{ color: theme ? `${Light}` : "" }}
                        className="Navbar__links"
                        smooth
                        to="/#about">
                        عني انا
                    </HashLink>
                    <Link
                        style={{ color: theme ? `${Light}` : "" }}
                        className="Navbar__links"
                        smooth to="/CONTACTS">
                        تواصل معي
                    </Link>
                </div>
                <div id="Burger" className="Navbar__burger">
                    <a href="#menu">
                        <img
                            src={Menu}
                            alt="The burger menu"
                            className="Navbar__menu-hide"
                        />
                    </a>
                </div>
                <div className="Navbar__theme">
                    {
                        <nav onClick={() => change()}>
                            {theme === false ?
                                <BsMoonFill className="Navbar__moon" />
                                :
                                <RiSunFill className="Navbar__icon" />
                            }
                        </nav>
                    }
                </div>
            </div>
            <section id="menu" className="Menu">
                <a href="/#">
                    <img src={Close}
                        alt="This closes the menu"
                        className="Menu__close"
                    />
                </a>
                <div className="Menu__link-container">
                    <a
                        className="Menu__links"
                        href="/#Skills">
                        المهارات
                    </a>
                    <a
                        className="Menu__links"
                        href="#projects">
                        المشاريع
                    </a>
                    <a
                        className="Menu__links"
                        smooth
                        href="#about">
                        عني انا
                    </a>
                    <a
                        className="Menu__links"
                        href="/CONTACTS">
                        تواصل معي
                    </a>
                </div>
            </section>
        </div>
    );
}