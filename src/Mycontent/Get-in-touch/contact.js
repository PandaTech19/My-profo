import { useContext } from "react";
import { AppContext } from "../../Mycontext/context";
import Phone from "./phone.gif";

export default function Contact() {
    const { t, isArabic, theme, dark, Light } = useContext(AppContext);
    const Info = t("GetInTouch_about", { returnObjects: true });
    const Placeholders = t("GetInTouch_placeholders", { returnObjects: true });


    return (
        <div id="contact-me" className="Contact-me">
            <div className={`Contact-me__head-container ${isArabic ? "Contact-me__head-container--arb" : ""}`}>
                <h1
                    style={{ color: theme ? "rgb(217, 217, 217)" : "" }}
                    className="Contact-me__head">
                    {t("GetInTouch_title")}
                </h1>
                <img
                    src={Phone}
                    alt="A Phone ringing"
                    className="Contact-me__gif"
                />
            </div>
            <div
                className={`Contact-me__title-container ${isArabic ? "Contact-me__title-container--arb" : ""}`}
                data-aos="fade-right" data-aos-duration="2000"
            >

                <p
                    style={{ color: theme ? "rgb(217, 217, 217)" : "" }}
                    className="Contact-me__title">
                    {Info[0]}
                    <br /><br />
                    {Info[1]}
                    <br />
                    <a href="mailto:pandatech1999@gmail.com" className="Contact-me__mail">{Info[2]}</a>
                    {Info[3]}
                </p>
            </div>
            <div
                className={`Contact-me__form-container ${isArabic ? "Contact-me__form-container--arb" : ""}`}
                data-aos-duration="2000"
                data-aos="zoom-in"
            >
                <form
                    action="https://send.pageclip.co/waHDjruVHuDXfRjJGMQfBTvkiy63ofDN/My-first-form"
                    class="pageclip-form"
                    className="Contact-me__form"
                    method="post">
                    <input
                        placeholder={Placeholders[0]}
                        type={Text}
                        name="name"
                        data-name="name"
                        className="Contact-me__inputs"
                        style={{
                            borderBottom: theme ? `2px solid ${Light}` : "",
                            color: theme ? `${Light}` : ""
                        }}
                        required
                    />
                    <input
                        placeholder={Placeholders[1]}
                        type={Text}
                        name="email"
                        data-name="Email"
                        className="Contact-me__inputs"
                        style={{
                            borderBottom: theme ? `2px solid ${Light}` : "",
                            color: theme ? `${Light}` : ""
                        }}
                        required
                    />
                    <textarea
                        className="Contact-me__message"
                        placeholder={Placeholders[2]}
                        type={Text}
                        name="body"
                        data-name="message"
                        style={{
                            borderBottom: theme ? `2px solid ${Light}` : "",
                            color: theme ? `${Light}` : ""
                        }}

                    />
                    <button
                        className="Contact-me__sub pageclip-form__submit"
                        type="submit"
                        style={{
                            background: theme ? `${Light}` : "",
                            color: theme ? `${dark}` : ""
                        }}
                    >
                        {Placeholders[3]}
                    </button>
                </form>
            </div>
        </div>
    )
}
