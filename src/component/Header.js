import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header id="thisisnav" style={{ position: "fixed" }}>
            <ul style={{ padding: 0, margin: 0 }}>
                <NavLink to="/" className="w3-button">Home</NavLink>
                <NavLink to="/projects" className="w3-button">Projects</NavLink>
                <NavLink to="/connect" className="w3-button">Contact</NavLink>
                <NavLink to="https://drive.google.com/file/d/1tgU7-T6NMSpDnHsBAWjJWwbk_xBY-x0K/view?usp=sharing" className="w3-button">Resume</NavLink>
            </ul>
        </header>
    )
}
export default Header
