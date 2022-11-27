import { useContext } from "react";
import { AppContext } from "../../Mycontext/context";
import Logo_foot from "./logo.jpg";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

export default function End() {
    const { theme, dark, Light } = useContext(AppContext);
    return (
        <div id="projects" className="Foot" style={{ background: theme ? `${Light}` : "" }}>
            <div className="Foot__logo-container">
                <HashLink smooth to="/#">
                    <img
                        src={Logo_foot}
                        alt="My logo site"
                        className="Foot__logo"
                    />
                </HashLink>
            </div>
            <div className="Foot__link-container"
                style={{
                    borderBottom: theme ? `2px solid ${dark}` : "",
                    borderTop: theme ? `2px solid ${dark}` : ""
                }}>
                <HashLink
                    style={{ color: theme ? `${dark}` : "" }}
                    className="Foot__link"
                    smooth to="/#Skills">
                    المهارات
                </HashLink>
                <HashLink
                    style={{ color: theme ? `${dark}` : "" }}
                    className="Foot__link"
                    smooth to="/#projects">
                    المشاريع
                </HashLink>
                <HashLink
                    style={{ color: theme ? `${dark}` : "" }}
                    className="Foot__link"
                    smooth to="/#about">
                    عني انا
                </HashLink>

                <HashLink
                    style={{ color: theme ? `${dark}` : "" }}
                    className="Foot__link"
                    smooth to="/CONTACTS#contact-me">
                    تواصل معي
                </HashLink>
            </div>
            <div className="Foot__social-container">
                <div className="Foot__created" style={{ color: theme ? `${dark}` : "" }}>©2022 React تم إنشاؤه بفخر بواسطة</div>
                <div className="Foot__socials">
                    <a href="https://www.linkedin.com/in/samer-timani-21b4b41b7" target="_blank">
                        <AiFillLinkedin className="Foot__icon" style={{ color: theme ? `${dark}` : "" }} />
                    </a>
                    <a href="https://github.com/Grimhunter9" target="_blank">
                        <AiFillGithub className="Foot__icon" style={{ color: theme ? `${dark}` : "" }} />
                    </a>
                    <a href="https://telegram.me/Grimhunter9"
                    ><BsTelegram className="Foot__icon" style={{ color: theme ? `${dark}` : "" }} />
                    </a>
                    <a href="https://www.instagram.com/sam_panda1999" target="_blank">
                        <AiFillInstagram className="Foot__icon" style={{ color: theme ? `${dark}` : "" }} />
                    </a>
                </div>
            </div>
        </div>
    )
}