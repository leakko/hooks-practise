import { Link } from "react-router-dom"
import homeImg from "../../Assets/casa.svg"

import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container">
                <Link class="navbar-brand" to="/"><img src={homeImg}/></Link>
            </div>
        </nav>
    );
};

export default Navbar;
