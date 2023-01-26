import Logo from "../01.jpg";

const Navbar = () => {
    return (
        <div className="Navbar">
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        </div>

    )
}

const Header = () => {
    return (
        <div className="Header">
            <img src={Logo} />
            <Navbar />
        </div>
    )
}
export default Header;


