import { useContext } from "react";
import { AppContext } from "../../Mycontext/context";
import { Link } from "react-router-dom";
import Me from "./me.jpg";
import { HashLink } from "react-router-hash-link";

export default function Head() {
    const { theme, dark, Light } = useContext(AppContext);
    return (
        <div className="Head">
            <div className="Head__intro-container">
                <h1 style={{ color: theme ? "white" : "" }} className="Head__intro">Greetings,
                    <br />Iam <span className="Head__name">Samer</span>,
                    <br />Web developer.
                </h1>
                <div className="Head__btn-con">
                    <a href="https://drive.google.com/file/d/13uwAZ40MS5uxHU-bAD5rGTR_WLNuhpzX/view?usp=sharing" target="_blank">
                        <button
                            style={{
                                color: theme ? `${Light}` : "",
                                background: theme ? `#1072D5` : "",
                                border: theme ? `1px solid #1072D5 ` : "",
                                boxShadow: theme ? "none" : ""
                            }}
                            className="Head__resume">View Resume
                        </button>
                    </a>
                    <HashLink smooth to="/Contacts#contact-me">
                        <button
                            style={{
                                color: theme ? `${dark}` : "",
                                background: theme ? `${Light}` : "",
                                boxShadow: theme ? "none" : ""
                            }}
                            className="Head__talk">Let's talk
                        </button>
                    </HashLink>
                </div>
            </div>
            <div className="Head__img-container">
                <img
                    src={Me}
                    alt="A picture of myself"
                    className="Head__me"
                />
            </div>
        </div >
    );
}