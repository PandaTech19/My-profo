import { useContext } from "react";
import { AppContext } from "../../Mycontext/context";
import Phone from "./phone.gif";

export default function Contact() {
    const { theme, dark, Light } = useContext(AppContext);


    return (
        <div id="contact-me" className="Contact-me">
            <div className="Contact-me__head-container Contact-me__head-container--arb">
                <h1
                    style={{ color: theme ? "rgb(217, 217, 217)" : "" }}
                    className="Contact-me__head">
                    ابقى على تواصل
                </h1>
                <img
                    src={Phone}
                    alt=""
                    className="Contact-me__gif"
                />
            </div>
            <div className="Contact-me__title-container Contact-me__title-container--arb">
                <p
                    style={{ color: theme ? "rgb(217, 217, 217)" : "" }}
                    className="Contact-me__title">
                    😀 ها أنت ذا كنت في انتظارك<br /><br />
                    لا تخجل و لا تتردد في أن تسألني عن أي شيء سواء <br />
                    <a href="mailto:pandatech1999@gmail.com" className="Contact-me__mail">مراسلتي عبر البريد الإلكتروني</a>
                    👇أو باستخدام النموذج أدناه
                </p>
            </div>
            <div className="Contact-me__form-container Contact-me__form-container--arb">
                <form
                    action="https://send.pageclip.co/waHDjruVHuDXfRjJGMQfBTvkiy63ofDN/My-first-form"
                    class="pageclip-form"
                    className="Contact-me__form Contact-me__form--arb"
                    method="post">
                    <input
                        placeholder="... الاسم"
                        type={Text}
                        name="name"
                        data-name="name"
                        className="Contact-me__inputs Contact-me__inputs--arb"
                        style={{
                            borderBottom: theme ? `2px solid ${Light}` : "",
                            color: theme ? `${Light}` : ""
                        }}
                        required
                    />
                    <input
                        placeholder="... بريدك الالكتروني"
                        type={Text}
                        name="email"
                        data-name="Email"
                        className="Contact-me__inputs Contact-me__inputs--arb"
                        style={{
                            borderBottom: theme ? `2px solid ${Light}` : "",
                            color: theme ? `${Light}` : ""
                        }}
                        required
                    />
                    <textarea
                        className="Contact-me__message Contact-me__message--arb"
                        placeholder="اسألني عن أي شيء"
                        type={Text}
                        name="body"
                        data-name="message"
                        style={{
                            borderBottom: theme ? `2px solid ${Light}` : "",
                            color: theme ? `${Light}` : ""
                        }}

                    />
                    <button
                        className="Contact-me__sub Contact-me__sub--arb pageclip-form__submit"
                        type="submit"
                        style={{
                            background: theme ? `${Light}` : "",
                            color: theme ? `${dark}` : ""
                        }}
                    >
                        إرسال
                    </button>
                </form>
            </div>
        </div>
    )
}
