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

                    <a href="#placeholder1"><li>placeholder1</li></a>
                    <a href="#placeholder2"><li>placeholder2</li></a>
                </ul>
            </div>
        </>
        );
    }
}

export default Navbar;