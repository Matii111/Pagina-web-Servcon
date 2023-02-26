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
                    <a href="/home" rel="noreferrer noopener"><li>INICIO</li></a>
                    <a href="/quienes-somos" rel="noreferrer noopener"><li>QUIÉNES SOMOS</li></a>
                    <a href="/portafolio" rel="noreferrer noopener"><li>PORTAFOLIO</li></a>
                    <a href="/contacto" rel="noreferrer noopener"><li>CONTACTO</li></a>
                </ul>
            </div>
        </>
        );
    }
}

export default Navbar;