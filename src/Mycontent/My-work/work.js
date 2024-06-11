import { useContext } from "react";
import { AppContext } from "../../Mycontext/context";
import myGif from './light.gif';
import Drone_st from "./drone.jpg";
import Drone_gf from "./drone.gif"
import Study_ua from "./studyuk.jpg";
import Uk_flag from "./uk-flag.webp"
import Movie_pk from "./film.jpg";
import Pop from "./pop.gif";
import Camera from "./Camera.gif";
import Photography from "./thumbnail.png";
import Stocks from "./stocks.jpg";
import Crypto from "./crypto.gif";
import Orb from "./orbg.png"
import Orbg from "./house.gif"

export default function Work() {
    const { t, isArabic, theme, Light } = useContext(AppContext);
    const About = t("Work_info", { returnObjects: true });
    const Name = t("Work_Project_name", { returnObjects: true });
    const Info = t("Work_Project_info", { returnObjects: true });

    return (
        <div id="projects" className="Work">
            <div className={`Work__head-container ${isArabic ? "Work__head-container--arb" : ""}`}
            >
                <h1
                    style={{ color: theme ? `${Light}` : "" }}
                    className={`Work__head ${isArabic ? "Work__head--arb" : ""}`}
                >
                    {t("Work_title")}
                </h1>
                <img
                    src={myGif}
                    alt="A light Blub flickering"
                    className="Work__gif"
                />
            </div>
            <div className={`Work__title-container ${isArabic ? "Work__title-container--arb" : ""}`}>
                <p
                    style={{ color: theme ? `${Light}` : "" }}
                    className="Work__title">
                    {About[0]}
                    <br />
                    <span className="Work__press">
                        {About[1]}
                    </span>
                </p>
            </div>
            {/* Orbg Project */}
            <>
                <div className="Work__proj-box">
                    <div className="Work__proj-pic-container" data-aos="fade-right" data-aos-duration="2000">
                        <a className="Work__proj-link" href="https://www.orb.bg" target="__blank">
                            <img
                                src={Orb}
                                alt="The project to drone store"
                                className="Work__proj-pic"
                            />
                        </a>
                    </div>
                    <div className={`Work__info-container ${isArabic ? "Work__info-container--arb" : ""}`}
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    >                        <div className="Work__proj-title-container">
                            <h1 className="Work__proj-title">{Name[5]}</h1>
                            <img src={Orbg} alt="A floating drone" className="Work__proj-gif" />
                        </div>
                        <p style={{ color: theme ? `${Light}` : "" }}
                            className={`Work__proj-info ${isArabic ? "Work__proj-info--arb" : ""}`}>
                            {Info[5]}
                        </p>

                    </div>
                </div>
            </>
            {/* Photography Project */}
            <>
                <div className="Work__proj-box">
                    <div className="Work__proj-pic-container" data-aos="fade-right" data-aos-duration="2000">
                        <a className="Work__proj-link" href="https://pick-best-moments.vercel.app" target="__blank">
                            <img
                                src={Photography}
                                alt="The project to Photography"
                                className="Work__proj-pic"
                            />
                        </a>
                    </div>
                    <div className={`Work__info-container ${isArabic ? "Work__info-container--arb" : ""}`}
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    >                        <div className="Work__proj-title-container">
                            <h1 className="Work__proj-title">{Name[3]}</h1>
                            <img src={Camera} alt="A Clicking camera" className="Work__proj-gif-camera" />
                        </div>
                        <p
                            style={{ color: theme ? `${Light}` : "" }}
                            className={`Work__proj-info ${isArabic ? "Work__proj-info--arb" : ""}`}>
                            {Info[3]}
                        </p>
                    </div>
                </div>
            </>
            {/* Stocks Project */}
            <>
                <div className="Work__proj-box">
                    <div className="Work__proj-pic-container" data-aos="fade-right" data-aos-duration="2000">
                        <a className="Work__proj-link" href="https://stocks-azure.vercel.app" target="__blank">
                            <img
                                src={Stocks}
                                alt="The project to drone store"
                                className="Work__proj-pic"
                            />
                        </a>
                    </div>
                    <div className={`Work__info-container ${isArabic ? "Work__info-container--arb" : ""}`}
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    >                        <div className="Work__proj-title-container">
                            <h1 className="Work__proj-title">{Name[4]}</h1>
                            <img src={Crypto} alt="A floating drone" className="Work__proj-gif" />
                        </div>
                        <p style={{ color: theme ? `${Light}` : "" }}
                            className={`Work__proj-info ${isArabic ? "Work__proj-info--arb" : ""}`}>
                            {Info[4]}
                        </p>

                    </div>
                </div>
            </>
            {/* Drone Project */}
            <>
                <div className="Work__proj-box">
                    <div className="Work__proj-pic-container" data-aos="fade-right" data-aos-duration="2000">
                        <a className="Work__proj-link" href="https://store-next-rosy.vercel.app" target="__blank">
                            <img
                                src={Drone_st}
                                alt="The project to drone store"
                                className="Work__proj-pic"
                            />
                        </a>
                    </div>
                    <div className={`Work__info-container ${isArabic ? "Work__info-container--arb" : ""}`}
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    >
                        <div className="Work__proj-title-container" data-aos="fade-left">
                            <h1 className="Work__proj-title">{Name[0]}</h1>
                            <img src={Drone_gf} alt="A floating drone" className="Work__proj-gif" />
                        </div>
                        <p
                            style={{ color: theme ? `${Light}` : "" }}
                            className={`Work__proj-info ${isArabic ? "Work__proj-info--arb" : ""}`}>
                            {Info[0]}
                        </p>
                    </div>
                </div>
            </>
            {/* Study In UA Project */}
            <>
                <div className="Work__proj-box">
                    <div className="Work__proj-pic-container" data-aos="fade-right" data-aos-duration="2000">
                        <a className="Work__proj-link" href="https://study-in-uk.vercel.app" target="__blank">
                            <img
                                src={Study_ua}
                                alt="The project to drone store"
                                className="Work__proj-pic"
                            />
                        </a>
                    </div>
                    <div className={`Work__info-container ${isArabic ? "Work__info-container--arb" : ""}`}
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    >                        <div className="Work__proj-title-container">
                            <h1 className="Work__proj-title">{Name[1]}</h1>
                            <img src={Uk_flag} alt="A floating drone" className="Work__proj-gif-uk" />
                        </div>
                        <p
                            style={{ color: theme ? `${Light}` : "" }}
                            className={`Work__proj-info ${isArabic ? "Work__proj-info--arb" : ""}`}>
                            {Info[1]}
                        </p>
                    </div>
                </div>
            </>
            {/* Movie Picker project  */}
            <>
                <div className="Work__proj-box">
                    <div className="Work__proj-pic-container" data-aos="fade-right" data-aos-duration="2000">
                        <a className="Work__proj-link" href="https://movie-picker-me.vercel.app" target="__blank">
                            <img
                                src={Movie_pk}
                                alt="The project to drone store"
                                className="Work__proj-pic"
                            />
                        </a>
                    </div>
                    <div className={`Work__info-container ${isArabic ? "Work__info-container--arb" : ""}`}
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    >                        <div className="Work__proj-title-container">
                            <h1 className="Work__proj-title">{Name[2]}</h1>
                            <img src={Pop} alt="A floating drone" className="Work__proj-gif-pop" />
                        </div>
                        <p
                            style={{ color: theme ? `${Light}` : "" }}
                            className={`Work__proj-info ${isArabic ? "Work__proj-info--arb" : ""}`}>
                            {Info[2]}
                        </p>
                    </div>
                </div>
            </>
        </div>
    )
}