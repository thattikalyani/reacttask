import React from 'react';
import {Link} from 'react-router-dom'
const Navbar = () => {
    const Style = {
        color: "violet",
        backgroundColor: "aqua",
        padding: "30px",
        fontFamily: "Sans-Serif"
    };
    return (
        <div>
            <ul style={Style}>
                <Link to="/"><li>Home</li></Link>
                <Link to="/userdetails"><li>UserDetails</li></Link>
                <Link to="/mail"><li>Mail</li></Link>
            </ul>


        </div>
    )

}
export default Navbar