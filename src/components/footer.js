import React from "react";

function topFunction(event) {
    event.preventDefault();
    document.body.scrollTo({ top: 0, behavior: 'smooth' }); // For Safari
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' }); // For Chrome, Firefox, IE and Opera
}


class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <ul className="FooterList">
                    <a className="Logo" href="/home" rel="noreferrer noopener">
                        <button onClick={topFunction}>
                            <img className="formatLogo" alt="logo"
                                src="https://raw.githubusercontent.com/Matii111/Pagina-web-Servcon/master/logoServcon512.png" />
                        </button>

                    </a>
                    <a href="#contacto"><li>Contacto</li></a>
                    <a href="#quienes-somos"><li>¿Quiénes Somos?</li></a>
                    <a href="#portafolio"><li>Portafolio</li></a>
                </ul>
            </div>
        );
    }
}

export default Footer;