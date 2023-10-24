import { useContext } from "react";
import { AppContext } from "../../Mycontext/context";
import Me from "./samer.jpeg";
import { HashLink } from "react-router-hash-link";

export default function Head() {
    const { theme, dark, Light, t, isArabic, isSpanish } = useContext(AppContext);
    const Hero = t("Hero_info", { returnObjects: true });
    const Hero_btn = t("Hero_btns", { returnObjects: true });

    return (
        <div className={`Head ${isArabic ? "Head--arb" : ""}  ${isSpanish ? "Head--esp" : ""}`}>
            <div className={`Head__intro-container ${isArabic ? "Head__intro-container--arb" : ""}`}>
                <h1 style={{ color: theme ? "white" : "" }} className={`Head__intro ${isArabic ? "Head__intro--arb" : ""}`}>{Hero[0]}
                    <br />{Hero[1]} <span className="Head__name">{Hero[2]}</span>
                    <br />{Hero[3]}
                </h1>
                <div className={`Head__btn-con ${isArabic ? "Head__btn-con--arb" : ""}`}>
                    <a href="https://drive.google.com/file/d/1hsu2-oULWIFxyMA8NwYlVAMd_9RALgdX/view?usp=sharing" target="_blank">
                        <button
                            style={{
                                color: theme ? `${Light}` : "",
                                background: theme ? `#1072D5` : "",
                                border: theme ? `1px solid #1072D5 ` : "",
                                boxShadow: theme ? "none" : ""
                            }}
                            className={`Head__resume ${isArabic ? "Head__resume--arb" : ""} ${isSpanish ? "Head__resume--esp" : ""}`} >
                            {Hero_btn[0]}
                        </button>
                    </a>
                    <HashLink smooth to="/Contacts#contact-me">
                        <button
                            style={{
                                color: theme ? `${dark}` : "",
                                background: theme ? `${Light}` : "",
                                boxShadow: theme ? "none" : ""
                            }}
                            className={`Head__talk ${isArabic ? "Head__talk--arb" : ""}`}>{Hero_btn[1]}
                        </button>
                    </HashLink>
                </div>
            </div>
            <img
                src={Me}
                alt="A picture of myself"
                className={`Head__me ${isArabic ? "Head__me--arb" : ""} ${isSpanish ? "Head__me--esp" : ""}`}
                style={{ outline: theme ? "5px solid white" : "" }}
            />
        </div>
    );
}