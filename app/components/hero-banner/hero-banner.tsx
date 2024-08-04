import Image from "next/image";
import BannerWave from "../../../public/images/waves/bg-2.png";
import BannerWaveOne from "../../../public/images/waves/bg.png";
import bg from "../../../public/images/colorful-flower-garden.jpg";

export default function HeroBanner() {
    return (
        <section className="ozgs-hero-banner">
            <div className="ozgs-hero-banner__wrapper">
                <div className="ozgs-hero-banner__waves">
                    <Image src={BannerWave} alt="banner wave animation"/>
                    <Image className="wave-two" src={BannerWaveOne} alt="banner wave animation"/>
                </div>
                <div className="ozgs-hero-banner__content">
                    <div className="ozgs-hero-banner__bg" 
                        style={{
                            backgroundImage: `url(${bg.src})`,
                            width: '100%',
                            height: '100%',
                        }}>
                    </div>
                    <div className="ozgs-hero-banner__text">
                        <h1>OZ green star Landscaping in Sydney Area</h1>
                        <p>Residential & Commercial</p>
                        <a href="">
                            Explore more
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}