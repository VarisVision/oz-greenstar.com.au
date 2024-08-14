interface NavMenuProps {
    isOpen: boolean;
}

export default function NavMenu({isOpen}: NavMenuProps) {
  return (
    <nav className={`ozgs-header__nav-menu ${isOpen ? 'open' : 'close'}`}>
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
  )
}
