import { useContext } from "react";
import { AppContext } from "../../Mycontext/context";
import { BsFillGearFill } from "react-icons/bs";
import Html from "./html.jpg";
import Css from "./css.jpg";
import Javascript from "./js.jpg";
import Reactjs from "./react.jpg";
import Nextjs from "./next.jpg";
import Tailwind from "./tailwind.jpg";
import Sass from "./sass.jpg";
import Bootstrap from "./bootstrap.jpg";
import Mysql from "./mysql.jpg";
import Nodejs from "./nodejs.jpg";
import Sanity from "./sanity.jpg";
import Vercel from "./vercel.jpg";
import Netlify from "./netlify.jpg";
import Git from "./git.jpg"

export default function Skill() {
    const { theme, Light } = useContext(AppContext);
    return (
        <div id="Skills" className="Skill">
            <div className="Skill__title-container">
                <h1
                    style={{ color: theme ? `${Light}` : "" }}
                    className="Skill__title">
                    Skills
                </h1>
                <BsFillGearFill className="Skill__gear" />
            </div>
            <div className="Skill__info-container">
                <p
                    style={{ color: theme ? `${Light}` : "" }}
                    className="Skill__info">
                    Over the years i learned different types of technologies here are some of them
                </p>
            </div>
            <div className="Skill__techno-container">
                <div className="Skill__techno-box">
                    <a href="https://www.w3schools.com/html" target="_blank">
                        <img
                            style={{ border: theme ? `5px solid ${Light}` : "" }}
                            src={Html}
                            alt=""
                            className="Skill__techno"
                        />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a href="https://www.w3schools.com/css" target="_blank">
                        <img
                            style={{ border: theme ? `5px solid ${Light}` : "" }}
                            src={Css}
                            alt=""
                            className="Skill__techno"
                        />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a href="https://www.w3schools.com/js" target="_blank">
                        <img
                            style={{ border: theme ? `5px solid ${Light}` : "" }}
                            src={Javascript}
                            alt=""
                            className="Skill__techno"
                        />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a href="https://reactjs.org" target="_blank">
                        <img
                            style={{ border: theme ? `5px solid ${Light}` : "" }}
                            src={Reactjs}
                            alt=""
                            className="Skill__techno"
                        />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a href="https://nextjs.org" target="_blank">
                        <img
                            style={{ border: theme ? `5px solid ${Light}` : "" }}
                            src={Nextjs}
                            alt=""
                            className="Skill__techno"
                        />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a href="https://tailwindcss.com" target="_blank">
                        <img
                            style={{ border: theme ? `5px solid ${Light}` : "" }}
                            src={Tailwind}
                            alt=""
                            className="Skill__techno"
                        />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a href="https://sass-lang.com" target="_blank">
                        <img
                            style={{ border: theme ? `5px solid ${Light}` : "" }}
                            src={Sass}
                            alt=""
                            className="Skill__techno"
                        />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a href="https://getbootstrap.com" target="_blank">
                        <img
                            style={{ border: theme ? `5px solid ${Light}` : "" }}
                            src={Bootstrap}
                            alt=""
                            className="Skill__techno Skill__boot"
                        />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a href="https://www.mysql.com" target="_blank">
                        <img
                            style={{ border: theme ? `5px solid ${Light}` : "" }}
                            src={Mysql}
                            alt=""
                            className="Skill__techno"
                        />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a href="https://nodejs.org/en" target="_blank">
                        <img
                            style={{ border: theme ? `5px solid ${Light}` : "" }}
                            src={Nodejs}
                            alt=""
                            className="Skill__techno"
                        />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a href="https://www.sanity.io" target="_blank">
                        <img
                            style={{ border: theme ? `5px solid ${Light}` : "" }}
                            src={Sanity}
                            alt=""
                            className="Skill__techno"
                        />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a href="https://vercel.com" target="_blank">
                        <img
                            style={{ border: theme ? `5px solid ${Light}` : "" }}
                            src={Vercel}
                            alt=""
                            className="Skill__techno"
                        />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a href="https://www.netlify.com" target="_blank">
                        <img
                            style={{ border: theme ? `5px solid ${Light}` : "" }}
                            src={Netlify}
                            alt=""
                            className="Skill__techno"
                        />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a href="https://git-scm.com" target="_blank">
                        <img
                            style={{ border: theme ? `5px solid ${Light}` : "" }}
                            src={Git}
                            alt=""
                            className="Skill__techno"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}