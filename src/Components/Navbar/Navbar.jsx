import React, { useContext } from "react"
import { ThemeContext } from "../../Contexts/ThemeContext";
import { Link } from "react-router-dom"
import homeImg from "../../Assets/casa.svg"
import homeImg2 from "../../Assets/casa2.png"

const Navbar = () => {

    const { toggleTheme, darkMode } = useContext(ThemeContext);

    return (
        <nav className={`navbar navbar-light ${ darkMode ? "bg-dark" : "bg-light"}`}>
            <div className="container">
                <Link className="navbar-brand" to="/"><img src={darkMode ? homeImg2 : homeImg}/></Link>
                <button className="btn btn-primary" onClick={toggleTheme}>{darkMode ? "Change to normal mode" : "Change to dark mode"}</button>
            </div>
        </nav>
    );
};

export default Navbar;
