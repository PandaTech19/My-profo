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
    const { theme, change , Light } = useContext(AppContext);
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
                </div>
                <div className="Navbar__link-container">
                    <HashLink
                        style={{ color: theme ? `${Light}` : "" }}
                        className="Navbar__links"
                        smooth
                        to="/#Skills">
                        Skills
                    </HashLink>
                    <HashLink
                        style={{ color: theme ? `${Light}` : "" }}
                        className="Navbar__links"
                        smooth
                        to="/#projects">
                        Projects
                    </HashLink>
                    <HashLink
                        style={{ color: theme ? `${Light}` : "" }}
                        className="Navbar__links"
                        smooth
                        to="/#about">
                        About me
                    </HashLink>
                    <Link
                        style={{ color: theme ?`${Light}` : "" }}
                        className="Navbar__links"
                        smooth to="/CONTACTS">
                        Contact me
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
                        Skills
                    </a>
                    <a
                        className="Menu__links"
                        href="#projects">
                        Projects
                    </a>
                    <a
                        className="Menu__links"
                        smooth
                        href="#about">
                        About me
                    </a>
                    <a
                        className="Menu__links"
                        href="/CONTACTS">
                        Contact me
                    </a>
                </div>
            </section>
        </div>
    );
}