"use client"

import TopBar from "./top-bar";
import NavMenu from "./nav-menu";
import Logo from "./logo";
import { useState } from "react";

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
      <header className="ozgs-header">
        <TopBar/>
        <div className="ozgs-header__navigation">
            <div className="ozgs-header__navigation--wrapper">
                <Logo/>
                <button className="ozgs-header__mobile-menu--toggler" onClick={handleMenuToggle}>
                    <div className={`ozgs-header__mobile-menu--hamburger ${isMenuOpen ? 'open' : ''}`}></div>
                </button>
                <div className="ozgs-header__desktop-menu">
                    <NavMenu isOpen={false}/>
                </div>
            </div>
        </div>
        <div className="ozgs-header__mobile-menu">
            {isMenuOpen && (
                <div className="ozgs-header__mobile-menu--overlay" onClick={handleMenuToggle}></div>
            )}
            <NavMenu isOpen={isMenuOpen}/>
        </div>
      </header>
    );
}