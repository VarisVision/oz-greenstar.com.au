import Image from "next/image";
import WaveUpper from "../../../public/images/waves/wave-top-darkgreen-1.png";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="ozgs-footer">
            <div className="ozgs-footer__wave">
                <Image className="ozgs-wave-container__wave" src={WaveUpper} alt="banner wave animation"/>
            </div>
            <div className="ozgs-footer__container">
                <div className="ozgs-footer__wrapper">
                    <p>© {currentYear} OZ Green Star. All rights reserved.</p>
                    <div className="varis-vision">
                        Website by <a href="https://varisvision.com">VarisVision</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
