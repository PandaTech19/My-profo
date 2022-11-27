import { useContext } from "react";
import { AppContext } from "../../Mycontext/context";
import { Link } from "react-router-dom";
import Me from "./me.jpg";
import { HashLink } from "react-router-hash-link";

export default function Head() {
    const { theme, dark, Light } = useContext(AppContext);
    return (
        <div className="Head Head--arb" >
            <div className="Head__intro-container Head__intro-container--arb">
                <h1 style={{ color: theme ? "white" : "" }} className="Head__intro Head__intro--arb">, تحياتي

                    <br />, انا<span className="Head__name"> سامر</span>
                    <br />. مطور ويب
                </h1>
                <div className="Head__btn-con Head__btn-con--arb">
                    <a href="https://drive.google.com/file/d/1zxbJXcGnd0omsSVd_vUvpVqmA6Qr1AsC/view?usp=share_link" target="_blank">
                        <button
                            style={{
                                color: theme ? `${Light}` : "",
                                background: theme ? `#1072D5` : "",
                                border: theme ? `1px solid #1072D5 ` : "",
                                boxShadow: theme ? "none" : ""
                            }}
                            className="Head__resume Head__resume--arb">مشاهدة السيره
                        </button>
                    </a>
                    <HashLink smooth to="/Contacts#contact-me">
                        <button
                            style={{
                                color: theme ? `${dark}` : "",
                                background: theme ? `${Light}` : "",
                                boxShadow: theme ? "none" : ""
                            }}
                            className="Head__talk Head__talk--arb">لنتحدث
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
        </div>
    );
}