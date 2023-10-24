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
import Firebase from "./firebase.png"
import Nodejs from "./nodejs.jpg";
import Sanity from "./sanity.jpg";


export default function About() {
    const { t, isArabic, theme, Light } = useContext(AppContext);
    const Info = t("About_info", { returnObjects: true });

    return (
        <div id="about" className="About">
            <div className={`About__head-container ${isArabic ? "About__head-container--arb" : ""}`}>
                <h1
                    style={{ color: theme ? `${Light}` : "" }}
                    className="About__head">
                    {t("About_title")}
                </h1>
                <img
                    src={Panda}
                    alt=""
                    className="About__gif"
                />
            </div>
            <div
                className={`About__title-container ${isArabic ? "About__title-container--arb" : ""}`}
                style={{ color: theme ? `${Light}` : "" }}
                data-aos="zoom-in" data-aos-duration="2000">
                {Info[0]}
                <div className="About__info-box">
                    <img
                        src={Bow}
                        alt=""
                        className="About__gif"
                    />
                    <br /><br />
                </div>
                {Info[1]}
                <section className="About__info-box">
                </section>
                {Info[2]}
                <div className="About__info-box">
                    <img
                        src={Work}
                        alt=""
                        className="About__gif-work"
                    />
                    <br /><br />
                </div>
                {Info[3]}
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
                {Info[4]}
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
                {Info[5]}
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
                {Info[6]}
                <div className="About__info-box">
                    <img
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                        src={Sanity}
                        alt=""
                        className="About__tech"
                    />
                    <br /><br />
                </div>
                {Info[7]}
                <div className="About__info-box">
                    <img
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                        src={Nodejs}
                        alt=""
                        className="About__tech"
                    />
                    <img
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                        src={Firebase}
                        alt=""
                        className="About__tech"
                    />
                    <br /><br />
                </div>
            </div>
        </div>
    );
}