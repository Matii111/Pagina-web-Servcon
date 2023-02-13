import React from "react";

class Navbar extends React.Component {
    render() {
        return (<>
    <div class="loader-wrapper">
      <span class="loader"><span class="loader-inner"></span></span>
    </div>

        

            <div className="Navbar">
                <a className="Logo" href="/home" rel="noreferrer noopener">
                    <img className="formatLogo" alt="logo"
                        src="https://raw.githubusercontent.com/Matii111/Pagina-web-Servcon/master/logoServcon512.png" />
                </a>
                <ul className="NavbarList">
                    <a href="#placeholder1"><li>Inicio</li></a>
                    <a href="#placeholder2"><li>Quiénes somos</li></a>
                    <a href="#placeholder2"><li>Portafolio</li></a>
                    <a href="#placeholder2"><li>Contacto</li></a>
                </ul>
            </div>
        </>
        );
    }
}

export default Navbar;