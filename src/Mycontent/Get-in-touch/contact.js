import { useContext } from "react";
import { AppContext } from "../../Mycontext/context";
import Phone from "./phone.gif";

export default function Contact() {
    const { theme, dark, Light } = useContext(AppContext);


    return (
        <div id="contact-me" className="Contact-me">
            <div className="Contact-me__head-container">
                <h1
                    style={{ color: theme ? "rgb(217, 217, 217)" : "" }}
                    className="Contact-me__head">
                    Get In Touch
                </h1>
                <img
                    src={Phone}
                    alt=""
                    className="Contact-me__gif"
                />
            </div>
            <div className="Contact-me__title-container">
                <p
                    style={{ color: theme ? "rgb(217, 217, 217)" : "" }}
                    className="Contact-me__title">
                    There you are i've been waiting for you 😀<br /><br />
                    Don't be shy feel free to ask me anything either by<br />
                    <a href="mailto:pandatech1999@gmail.com" className="Contact-me__mail">Emailing me</a>
                    or using the form below 👇
                </p>
            </div>
            <div className="Contact-me__form-container">
                <form
                    action="https://send.pageclip.co/waHDjruVHuDXfRjJGMQfBTvkiy63ofDN/My-first-form"
                    class="pageclip-form"
                    className="Contact-me__form"
                    method="post">
                    <input
                        placeholder="Your Name..."
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
                        placeholder="Your Email..."
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
                        placeholder="Ask Me Anything"
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
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}
