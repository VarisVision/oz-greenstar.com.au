export default function TopBar() {
    return (
        <div className="ozgs-header__top-bar">
            <div className="ozgs-header__top-bar--wrapper">
                <div className="ozgs-header__top-bar--left">
                    <ul>
                        <li>
                            <i></i>
                            <b>Location: </b>
                            <a href="google business page">Western Sydney</a>
                        </li>
                        <li>
                            <i></i>
                            <b>Email: </b>
                            <a href="mailto:info@oz-greenstar.com.au">info@oz-greenstar.com.au</a>
                        </li>
                        <li>
                            <i></i>
                            <b>Phone: </b>
                            <a href="tel:+61404236250">404236250</a>
                        </li>
                    </ul>
                </div>
                <div className="ozgs-header__top-bar--right">
                    <ul>
                        <li>FACEBOOK</li>
                        <li>INSTAGRAM</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}