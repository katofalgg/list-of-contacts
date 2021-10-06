import React from "react";
import {Link} from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <div>
            <nav>
                <Link to='/'>
                    Список контактов
                </Link>
            </nav>
        </div>
    );
};
export default Navbar;
