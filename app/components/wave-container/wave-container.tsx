import React, { ReactNode } from 'react';
import Image from "next/image";
import BannerWaveOne from "../../../public/images/waves/wave-bottom-2.png";

interface ContainerProps {
  children: ReactNode;
}

const WaveContainer: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="ozgs-wave-container">
            <div className="ozgs-wave-container__upper-wave">
                <Image className="ozgs-wave-container__wave" src={BannerWaveOne} alt="banner wave animation"/>
            </div>
            <div className="ozgs-wave-container__content">
                <div className="ozgs-wave-container__content-wrapper">
                    {children}
                </div>
            </div>
            <div className="ozgs-wave-container__lower-wave">
                <Image className="ozgs-wave-container__wave" src={BannerWaveOne} alt="banner wave animation"/>
            </div>
        </div>
    )

};

export default WaveContainer;