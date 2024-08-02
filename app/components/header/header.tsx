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
                            <a href="">
                                <span className="link-underline link-underline-black">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="link-underline link-underline-black">About Us</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="link-underline link-underline-black">Services</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="link-underline link-underline-black">Gallery</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="link-underline link-underline-black">Contact</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
      </header>
    );
}