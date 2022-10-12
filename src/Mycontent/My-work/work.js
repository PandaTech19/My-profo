import { useContext } from "react";
import { AppContext } from "../../Mycontext/context";
import myGif from './light.gif';
import Drone_st from "./drone.jpg";
import Drone_gf from "./drone.gif"
import Study_ua from "./studyuk.jpg";
import Uk_flag from "./uk-flag.webp"
import Movie_pk from "./film.jpg";
import Pop from "./pop.gif";
import Old_pf from "./old-prof.jpg";
import Old from "./old-pf.gif";

export default function Work() {
    const { theme, Light } = useContext(AppContext);
    return (
        <div id="projects" className="Work">
            <div className="Work__head-container">
                <h1
                    style={{ color: theme ? `${Light}` : "" }}
                    className="Work__head">
                    My Work
                </h1>
                <img
                    src={myGif}
                    alt=""
                    className="Work__gif"
                />
            </div>
            <div className="Work__title-container">
                <p
                    style={{ color: theme ? `${Light}` : "" }}
                    className="Work__title">
                    Do you want a beautiful responsive website on all devices,
                    if thats the case then i'm your guy.
                </p>
            </div>
            <div className="Work__proj-container">
                <div className="Work__proj-box">
                    <div className="Work__proj-pic-container">
                        <a className="Work__proj-link" href="https://store-next-rosy.vercel.app" target="__blank">
                            <img
                                src={Drone_st}
                                alt="The project to drone store"
                                className="Work__proj-pic"
                            />
                        </a>
                    </div>
                    <div className="Work__info-container">
                        <div className="Work__proj-title-container">
                            <h1 className="Work__proj-title">Drone Store</h1>
                            <img src={Drone_gf} alt="A floating drone" className="Work__proj-gif" />
                        </div>
                        <p
                            style={{ color: theme ? `${Light}` : "" }}
                            className="Work__proj-info">
                            A project that i built using the Next js framework,
                            i've added some features such a Carousel and a modal.
                        </p>

                    </div>
                </div>
            </div>
            <div className="Work__proj-container">
                <div className="Work__proj-box">
                    <div className="Work__proj-pic-container">
                        <a className="Work__proj-link" href="https://study-in-uk.vercel.app" target="__blank">
                            <img
                                src={Study_ua}
                                alt="The project to drone store"
                                className="Work__proj-pic"
                            />
                        </a>
                    </div>
                    <div className="Work__info-container">
                        <div className="Work__proj-title-container">
                            <h1 className="Work__proj-title">Study In Ukraine</h1>
                            <img src={Uk_flag} alt="A floating drone" className="Work__proj-gif-uk" />
                        </div>
                        <p
                            style={{ color: theme ? `${Light}` : "" }}
                            className="Work__proj-info">
                            Study-in-uk is a website that helps people to apply for a visa for studying in Ukraine and
                            picking what university is suitable for you, its also has two languages for both english and
                            arabic speakers to understand .
                        </p>

                    </div>
                </div>
            </div>
            <div className="Work__proj-container">
                <div className="Work__proj-box">
                    <div className="Work__proj-pic-container">
                        <a className="Work__proj-link" href="https://movie-picker-me.vercel.app" target="__blank">
                            <img
                                src={Movie_pk}
                                alt="The project to drone store"
                                className="Work__proj-pic"
                            />
                        </a>
                    </div>
                    <div className="Work__info-container">
                        <div className="Work__proj-title-container">
                            <h1 className="Work__proj-title">Movie picker</h1>
                            <img src={Pop} alt="A floating drone" className="Work__proj-gif-pop" />
                        </div>
                        <p
                            style={{ color: theme ? `${Light}` : "" }}
                            className="Work__proj-info">
                            Movie picker is a website that helps you search for your favourite movie or series,
                            it also has sanity built in. so the client can edit, add and remove movies or series that
                            they would want to be in the website.
                        </p>

                    </div>
                </div>
            </div>
            <div className="Work__proj-container">
                <div className="Work__proj-box">
                    <div className="Work__proj-pic-container">
                        <a className="Work__proj-link" href="https://my-protfolio-me.vercel.app" target="__blank">
                            <img
                                src={Old_pf}
                                alt="The project to drone store"
                                className="Work__proj-pic"
                            />
                        </a>
                    </div>
                    <div className="Work__info-container">
                        <div className="Work__proj-title-container">
                            <h1 className="Work__proj-title">Old profolio</h1>
                            <img src={Old} alt="A floating drone" className="Work__proj-gif" />
                        </div>
                        <p
                            style={{ color: theme ? `${Light}` : "" }}
                            className="Work__proj-info">
                            This my first profolio i've built long time ago, and you can see the improvements already.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}