import { useContext } from "react";
import { AppContext } from "../../Mycontext/context";
import myGif from './light.gif';
import Drone_st from "./drone.jpg";
import Drone_gf from "./drone.gif"
import Study_ua from "./studyuk.jpg";
import Uk_flag from "./uk-flag.webp"
import Movie_pk from "./film.jpg";
import Pop from "./pop.gif";
import Stocks from "./stocks.jpg";
import Crypto from "./crypto.gif";
import Old_pf from "./old-prof.jpg";
import Old from "./old-pf.gif";

export default function Work() {
    const { theme, Light } = useContext(AppContext);
    return (
        <div id="projects" className="Work">
            <div className="Work__head-container Work__head-container--arb">
                <h1
                    style={{ color: theme ? `${Light}` : "" }}
                    className="Work__head">
                    مشاريعي
                </h1>
                <img
                    src={myGif}
                    alt=""
                    className="Work__gif"
                />
            </div>
            <div className="Work__title-container Work__title-container--arb">
                <p
                    style={{ color: theme ? `${Light}` : "" }}
                    className="Work__title">
                    .هل تريد موقعًا رائعًا يستجيب لجميع الأجهزة ، إذا كان هذا هو الحال فأنا هو مطورك<br />
                    <span className="Work__press">اضغط على الصورة لمعاينة الموقع</span>
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
                        <div className="Work__proj-title-container Work__proj-title-container--arb">
                            <h1 className="Work__proj-title  Work__proj-title--arb">متجر الطائرات بدون طيار</h1>
                            <img src={Drone_gf} alt="A floating drone" className="Work__proj-gif" />
                        </div>
                        <p
                            style={{ color: theme ? `${Light}` : "" }}
                            className="Work__proj-info Work__proj-info--arb">
                            ,Next js مشروع قمت بإنشائه باستخدام
                            <br />
                            .لقد أضفت بعض الميزات مثل مغير الصور
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
                        <div className="Work__proj-title-container Work__proj-title-container--arb">
                            <h1 className="Work__proj-title">الدراسة في أوكرانيا</h1>
                            <img src={Uk_flag} alt="A floating drone" className="Work__proj-gif-uk Work__proj-gif-uk--arb" />
                        </div>
                        <p
                            style={{ color: theme ? `${Light}` : "" }}
                            className="Work__proj-info Work__proj-info--arb">
                            الدراسة في أوكرانيا هو موقع ويب يساعد الأشخاص على التقدم للحصول
                            على تأشيرة للدراسة في أوكرانيا واختيار الجامعة المناسبة لك
                            ، كما أنه يحتوي على لغتين للمتحدثين باللغة الإنجليزية والعربية لفهمها
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
                        <div className="Work__proj-title-container Work__proj-title-container--arb">
                            <h1 className="Work__proj-title">منتقي الفيلم</h1>
                            <img src={Pop} alt="A floating drone" className="Work__proj-gif-pop Work__proj-gif-pop--arb" />
                        </div>
                        <p
                            style={{ color: theme ? `${Light}` : "" }}
                            className="Work__proj-info Work__proj-info--arb">
                            منتقي الأفلام هو موقع ويب يساعدك في البحث عن فيلمك أو مسلسلك المفضل ،
                            كما انها مبنية على نظام سانتي
                            حتى يتمكن العميل من تعديل وإضافة وإزالة الأفلام أو المسلسلات التي يريد أن تكون موجودة في الموقع
                        </p>

                    </div>
                </div>
            </div>
            <div className="Work__proj-container">
                <div className="Work__proj-box">
                    <div className="Work__proj-pic-container">
                        <a className="Work__proj-link" href="https://stocks-azure.vercel.app" target="__blank">
                            <img
                                src={Stocks}
                                alt="The project to drone store"
                                className="Work__proj-pic"
                            />
                        </a>
                    </div>
                    <div className="Work__info-container">
                        <div className="Work__proj-title-container Work__proj-title-container--arb">
                            <h1 className="Work__proj-title">البورصة</h1>
                            <img src={Crypto} alt="A floating drone" className="Work__proj-gif" />
                        </div>
                        <p style={{ color: theme ? `${Light}` : "" }}
                            className="Work__proj-info Work__proj-info--arb">
                            موقع إلكتروني مستقل أنشأته لعميل يتضمن عملات مشفرة
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
                        <div className="Work__proj-title-container Work__proj-title-container--arb">
                            <h1 className="Work__proj-title Work__proj-title--arb ">موقع الويب الشخصي القديم</h1>
                            <img src={Old} alt="A floating drone" className="Work__proj-gif" />
                        </div>
                        <p style={{ color: theme ? `${Light}` : "" }}
                            className="Work__proj-info Work__proj-info--arb">
                            هذا أول بروفوليو لي قمت ببنائه منذ وقت طويل ، ويمكنك رؤية التحسينات بالفعل
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}