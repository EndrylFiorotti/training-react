import "./header.css"
import imageShadows from "../../img/Shadows.gif"

const Header = () => {
    return (
        <header className="banner">
            <img src={imageShadows} className="shadows" />
        </header>
    );
}

export default Header;