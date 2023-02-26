import React from "react";

class Navbar extends React.Component {
    render() {
        return (<>
            <div className="Navbar">
                <a className="Logo" href="/home" rel="noreferrer noopener">
                    <img className="formatLogo" alt="logo"
                        src="https://raw.githubusercontent.com/Matii111/Pagina-web-Servcon/master/logoServcon512.png" />
                </a>
                <ul className="NavbarList">
                    <a href="#inicio"><li>INICIO</li></a>
                    <a href="#quienes-somos"><li>QUIÉNES SOMOS</li></a>
                    <a href="#portafolio"><li>PORTAFOLIO</li></a>
                    <a href="#contacto"><li>CONTACTO</li></a>
                </ul>
            </div>
        </>
        );
    }
}

export default Navbar;