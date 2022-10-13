import { useContext } from "react";
import { AppContext } from "../../Mycontext/context";
import Panda from "./po-wave.gif";
import Bow from "./bow.gif";
import Work from "./work.gif";
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


export default function About() {
    const { theme, Light } = useContext(AppContext);
    let age = new Date().getFullYear() - 1999;
    return (
        <div id="about" className="About">
            <div className="About__head-container">
                <h1
                    style={{ color: theme ? `${Light}` : "" }}
                    className="About__head">
                    About me
                </h1>
                <img
                    src={Panda}
                    alt=""
                    className="About__gif"
                />
            </div>
            <div className="About__title-container" style={{ color: theme ? `${Light}` : "" }}>
                So we've reached the end dear viewer, Now let me formally Introduce myself.
                <div className="About__info-box">
                    <img
                        src={Bow}
                        alt=""
                        className="About__gif"
                    />
                    <br /><br />
                </div>
                My name Samer, {age} years old and I'm thriving future Front-end-developer.
                <div className="About__info-box">
                </div>
                Creating websites and using different technologies helps me to get a lot of experience and a great way
                to open many doors to creating different types of projects with different languages and not be limited.
                <div className="About__info-box">
                    <img
                        src={Work}
                        alt=""
                        className="About__gif-work"
                    />
                    <br /><br />
                </div>
                At the beginning I started with the basics (Html , CSS , Js).
                <div className="About__info-box">
                    <img
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                        src={Html}
                        alt=""
                        className="About__tech"
                    />
                    <img
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                        src={Css}
                        alt=""
                        className="About__tech"
                    />
                    <img
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                        src={Javascript}
                        alt=""
                        className="About__tech"
                    />
                    <br /><br />
                </div>
                But then I learned different types of frame works such as (React.js , Next Js).
                <div className="About__info-box">
                    <img
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                        src={Reactjs}
                        alt=""
                        className="About__tech"
                    />
                    <img
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                        src={Nextjs}
                        alt=""
                        className="About__tech"
                    />
                    <br /><br />
                </div>
                For styling I learned (Tailwind CSS , Sass , Bootstrap).
                <div className="About__info-box">
                    <img
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                        src={Tailwind}
                        alt=""
                        className="About__tech"
                    />
                    <img
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                        src={Sass}
                        alt=""
                        className="About__tech"
                    />
                    <img
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                        src={Bootstrap}
                        alt=""
                        className="About__tech"
                    />
                    <br /><br />
                </div>
                I also used data storing and fetching from a platform I've been using for a while (Sanity Io).
                <div className="About__info-box">
                    <img
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                        src={Sanity}
                        alt=""
                        className="About__tech"
                    />
                    <br /><br />
                </div>
                For now I'm studying (Node js) as a backend language and inserting data by using (Mysql).
                <div className="About__info-box">
                    <img
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                        src={Nodejs}
                        alt=""
                        className="About__tech"
                    />
                    <img
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                        src={Mysql}
                        alt=""
                        className="About__tech"
                    />
                    <br /><br />
                </div>
                In the end i would love to work with a tech company that will improve my skills and to work
                in a team to reach more heights in the years to come.
            </div>
        </div>
    );
}