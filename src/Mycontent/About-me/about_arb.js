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
import Mysql from "./mysql.jpg";
import Nodejs from "./nodejs.jpg";
import Sanity from "./sanity.jpg";


export default function About() {
    const { theme, Light } = useContext(AppContext);
    let age = new Date().getFullYear() - 1999;
    return (
        <div id="about" className="About">
            <div className="About__head-container About__head-container--arb">
                <h1
                    style={{ color: theme ? `${Light}` : "" }}
                    className="About__head">
                    عني انا
                </h1>
                <img
                    src={Panda}
                    alt=""
                    className="About__gif"
                />
            </div>
            <div className="About__title-container About__title-container--arb" style={{ color: theme ? `${Light}` : "" }}>
                لقد وصلنا إلى النهاية ، عزيزي المشاهد ، الآن اسمح لي أن أقدم نفسي رسميًا
                <div className="About__info-box">
                    <img
                        src={Bow}
                        alt=""
                        className="About__gif"
                    />
                    <br /><br />
                </div>
                اسمي سامر، عمري {age} سنه وانا مطور الواجهه الأماميه للويب
                <div className="About__info-box">
                </div>
                يساعدني إنشاء مواقع الويب واستخدام التقنيات المختلفة في الحصول على الكثير من الخبرة وطريقة رائعة لفتح العديد من الأبواب لإنشاء أنواع مختلفة من المشاريع بلغات مختلفة دون أن تكون محدوده 
                <div className="About__info-box">
                    <img
                        src={Work}
                        alt=""
                        className="About__gif-work"
                    />
                    <br /><br />
                </div>
                (Html , CSS , Js) في البداية بدأت بالأساسيات
                
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
                (React.js , Next Js) ولكن بعد ذلك تعلمت أنواعًا مختلفة من أعمال الإطارات مثل .
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
                (Tailwind CSS , Sass , Bootstrap) لتصميم تعلمت 
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
                (Sanity Io )لقد استخدمت أيضًا تخزين البيانات وجلبها من نظام أساسي كنت أستخدمه لفترة من الوقت 
                <div className="About__info-box">
                    <img
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                        src={Sanity}
                        alt=""
                        className="About__tech"
                    />
                    <br /><br />
                </div>
                (Mysql) كلغة خلفية للويب وإدخال البيانات باستخدام (Node js)أنا أدرس الآن 
                <div className="About__info-box">
                    <img
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                        src={Nodejs}
                        alt=""
                        className="About__tech"
                    />
                    <img
                        style={{ border: theme ? `5px solid ${Light}` : "" }}
                        src={Mysql}
                        alt=""
                        className="About__tech"
                    />
                    <br /><br />
                </div>
                في النهاية ، أرغب في العمل مع شركة تقنية تعمل على تحسين مهاراتي والعمل في فريق للوصول إلى مستويات أعلى في السنوات القادمة
            </div>
        </div>
    );
}