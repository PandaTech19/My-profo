import { useContext } from "react";
import { AppContext } from "../../Mycontext/context";
import { BsFillGearFill } from "react-icons/bs";
import Html from "./html.jpg";
import Css from "./css.jpg";
import Javascript from "./js.jpg";
import Typescript from "./typescript.png"
import Reactjs from "./react.jpg";
import Nextjs from "./next.jpg";
import Tailwind from "./tailwind.jpg";
import Sass from "./sass.jpg";
import Bootstrap from "./bootstrap.jpg";
import Mysql from "./mysql.jpg";
import MongoDb from "./mongo.png";
import Mongoose from "./mongoose.png"
import Firebase from "./firebase.png"
import Nodejs from "./nodejs.jpg";
import Express from "./express.png"
import Sanity from "./sanity.jpg";
import Vercel from "./vercel.jpg";
import Netlify from "./netlify.jpg";
import Cloudflare from "./cloudflare.png"
import Git from "./git.jpg"
import Jira from "./jira.png"
import Figma from "./figma.png"

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
            <div className="Skill__info-container" data-aos="fade-right" data-aos-duration="2000">
                <p
                    style={{ color: theme ? `${Light}` : "" }}
                    className="Skill__info">
                    Over the years i learned different types of technologies here are some of them
                </p>
            </div>
            <div className="Skill__techno-container" data-aos="zoom-in" data-aos-duration="2000" >
                <div className="Skill__techno-box">
                    <a
                        className="Skill__techno"
                        href="https://www.w3schools.com/html"
                        target="_blank"
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                    >
                        <img
                            src={Html}
                            alt="The picture of the html icon"
                            className="Skill__image"
                        />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a
                        className="Skill__techno"
                        href="https://www.w3schools.com/css"
                        target="_blank"
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                    >
                        <img
                            src={Css}
                            alt="The picture of the css icon"
                            className="Skill__image"
                        />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a
                        className="Skill__techno"
                        href="https://www.w3schools.com/js"
                        target="_blank"
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                    >
                        <img
                            src={Javascript}
                            alt="The picture of the javascript icon"
                            className="Skill__image"
                        />
                    </a>
                </div>

                <div className="Skill__techno-box">
                    <a
                        className="Skill__techno"
                        href="https://www.typescriptlang.org"
                        target="_blank"
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                    >
                        <img
                            src={Typescript}
                            alt="The picture of the Typescript icon"
                            className="Skill__image"
                        />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a
                        className="Skill__techno"
                        href="https://reactjs.org"
                        target="_blank"
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                    >
                        <img
                            src={Reactjs}
                            alt="The picture of the React js icon"
                            className="Skill__image"
                        />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a
                        className="Skill__techno"
                        href="https://nextjs.org"
                        target="_blank"
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                    >
                        <img
                            src={Nextjs}
                            alt="The picture of the Next js icon"
                            className="Skill__image"
                        />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a
                        className="Skill__techno"
                        href="https://tailwindcss.com"
                        target="_blank"
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                    >
                        <img
                            src={Tailwind}
                            alt="The picture of the Tailwindcss icon"
                            className="Skill__image"
                        />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a
                        className="Skill__techno"
                        href="https://sass-lang.com"
                        target="_blank"
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                    >
                        <img
                            src={Sass}
                            alt="The picture of the Sass icon"
                            className="Skill__image"
                        />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a
                        className="Skill__techno"
                        href="https://getbootstrap.com"
                        target="_blank"
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                    >
                        <img
                            src={Bootstrap}
                            alt="The picture of the Bootstrap icon"
                            className="Skill__image Skill__boot"
                        />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a
                        className="Skill__techno"
                        href="https://www.mysql.com"
                        target="_blank"
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                    >
                        <img
                            src={Mysql}
                            alt="The picture of the Mysql icon"
                            className="Skill__image"
                        />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a
                        className="Skill__techno"
                        href="https://www.mongodb.com"
                        target="_blank"
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                    >
                        <img
                            src={MongoDb}
                            alt="The picture of the MongoDb icon"
                            className="Skill__image"
                        />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a
                        className="Skill__techno"
                        href="https://mongoosejs.com"
                        target="_blank"
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                    >
                        <img
                            src={Mongoose}
                            alt="The picture of the Mongoose icon"
                            className="Skill__image"
                        />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a
                        className="Skill__techno"
                        href="http://firebase.google.com"
                        target="_blank"
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                    >
                        <img
                            src={Firebase}
                            alt="The picture of the Mysql icon"
                            className="Skill__image Skill__boot "
                        />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a
                        className="Skill__techno"
                        href="https://nodejs.org/en"
                        target="_blank"
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                    >
                        <img
                            src={Nodejs}
                            alt="The picture of the Node js icon"
                            className="Skill__image" />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a
                        className="Skill__techno"
                        href="https://expressjs.com"
                        target="_blank"
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                    >
                        <img
                            src={Express}
                            alt="The picture of the Express js icon"
                            className="Skill__image" />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a
                        className="Skill__techno"
                        href="https://www.sanity.io"
                        target="_blank"
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                    >
                        <img
                            src={Sanity}
                            alt="The picture of the Sanity IO icon"
                            className="Skill__image" />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a
                        className="Skill__techno"
                        href="https://vercel.com"
                        target="_blank"
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                    >
                        <img
                            src={Vercel}
                            alt="The picture of the Vercel icon"
                            className="Skill__image" />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a
                        className="Skill__techno"
                        href="https://www.cloudflare.com"
                        target="_blank"
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                    >
                        <img
                            src={Cloudflare}
                            alt="The picture of the cloudflare icon"
                            className="Skill__image" />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a
                        className="Skill__techno"
                        href="https://www.netlify.com"
                        target="_blank"
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                    >
                        <img
                            src={Netlify}
                            alt="The picture of the Netlify icon"
                            className="Skill__image" />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a
                        className="Skill__techno"
                        href="https://git-scm.com"
                        target="_blank"
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                    >
                        <img
                            src={Git}
                            alt="The picture of the GIt icon"
                            className="Skill__image" />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a
                        className="Skill__techno"
                        href="https://www.atlassian.com/software/jira?&aceid=&adposition=&adgroup=137008204930&campaign=18455741485&creative=639487372768&device=c&keyword=jira&matchtype=e&network=g&placement=&ds_kids=p73363671953&ds_e=GOOGLE&ds_eid=700000001558501&ds_e1=GOOGLE&gclsrc=ds"
                        target="_blank"
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                    >
                        <img
                            src={Jira}
                            alt="The picture of the Jira icon"
                            className="Skill__image"
                        />
                    </a>
                </div>
                <div className="Skill__techno-box">
                    <a
                        className="Skill__techno"
                        href="https://www.figma.com"
                        target="_blank"
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                    >
                        <img
                            src={Figma}
                            alt="The picture of the figma icon"
                            className="Skill__image"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}