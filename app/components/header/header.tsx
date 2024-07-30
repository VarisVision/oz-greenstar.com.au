import TopBar from "./top-bar";

import LogoImage from "../../../public/images/oz-green-star-logo.svg"

import Image from "next/image";

export default function Header() {
    return (
      <header className="ozgs-header">
        <TopBar/>
        <div className="ozgs-header__navigation">
            <div className="ozgs-header__navigation--wrapper">
                <div className="ozgs-header__logo">
                    <Image src={LogoImage} alt="logo" width={300} height={180}/>
                </div>
                <nav className="ozgs-header__nav-menu">
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            About Us
                        </li>
                        <li>
                            Services
                        </li>
                        <li>
                            Gallery
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </nav>
                <div className="ozgs-header-right">
                    <a>BOOK NOW</a>
                </div>
            </div>
        </div>
      </header>
    );
}