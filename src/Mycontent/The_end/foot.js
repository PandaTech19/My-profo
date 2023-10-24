import { useContext } from "react";
import { AppContext } from "../../Mycontext/context";
import Logo_foot from "./logo.jpg";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

export default function End() {
    const { t, isArabic, theme, dark, Light } = useContext(AppContext);
    const Navigation = t("Navigation_links", { returnObjects: true });

    return (
        <div id="projects" className="Foot" style={{ background: theme ? `${Light}` : "" }}>
            <div className={`Foot__logo-container ${isArabic ? "Foot__logo-container--arb" : ""}`}>
                <HashLink smooth to="/#">
                    <img
                        src={Logo_foot}
                        alt="My logo site"
                        className="Foot__logo"
                    />
                </HashLink>
            </div>
            <div className={`Foot__link-container ${isArabic ? "Foot__link-container--arb" : ""}`}
                style={{
                    borderBottom: theme ? `2px solid ${dark}` : "",
                    borderTop: theme ? `2px solid ${dark}` : ""
                }}>
                <HashLink
                    style={{ color: theme ? `${dark}` : "" }}
                    className="Foot__link"
                    smooth to="/#Skills">
                    {Navigation[0]}
                </HashLink>
                <HashLink
                    style={{ color: theme ? `${dark}` : "" }}
                    className="Foot__link"
                    smooth to="/#projects">
                    {Navigation[1]}
                </HashLink>
                <HashLink
                    style={{ color: theme ? `${dark}` : "" }}
                    className="Foot__link"
                    smooth to="/#about">
                    {Navigation[2]}
                </HashLink>

                <HashLink
                    style={{ color: theme ? `${dark}` : "" }}
                    className="Foot__link"
                    smooth to="/CONTACTS#contact-me">
                    {Navigation[3]}
                </HashLink>
            </div>
            <div className="Foot__social-container">

                <div
                    className={`Foot__created ${isArabic ? "Foot__created--arb" : ""}`}
                    style={{ color: theme ? `${dark}` : "" }}>
                    {t("Footer_cc")}
                </div>
                <div className="Foot__socials">
                    <a aria-label="This is a link to my linkedin"
                        href="https://www.linkedin.com/in/samer-timani-21b4b41b7"
                        target="_blank">
                        <AiFillLinkedin className="Foot__icon" style={{ color: theme ? `${dark}` : "" }} />
                    </a>
                    <a aria-label="This is a link to my gmail"
                        href="https://github.com/PandaTech19"
                        target="_blank">
                        <AiFillGithub className="Foot__icon" style={{ color: theme ? `${dark}` : "" }} />
                    </a>
                    <a aria-label="This is a link to my telegram"
                        href="https://telegram.me/Grimhunter9"
                        target="_blank"
                    ><BsTelegram className="Foot__icon" style={{ color: theme ? `${dark}` : "" }} />
                    </a>
                    <a aria-label="This is a link to my Instagram"
                        href="https://www.instagram.com/sam_panda1999"
                        target="_blank">
                        <AiFillInstagram className="Foot__icon" style={{ color: theme ? `${dark}` : "" }} />
                    </a>
                </div>
            </div>
        </div>
    )
}