import React from "react";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import "../styles.css";

class PortfolioPage extends React.Component {
    render() {
        return (
            <>
                <Navbar></Navbar>
                <body>
                    <div className="webpage-content">

                        <div className="proyectos-container">

                            <div className="proyectos">
                                <img className="imgs-proyectos imgs-left" src="https://images.wallpaperscraft.com/image/single/landscape_usa_river_sky_malibu_california_clouds_hdr_nature_79461_1280x720.jpg" alt="sample-img"></img>
                                <div>
                                    <label for="proyecto1">
                                        <b>PROYECTO 1</b>
                                    </label>
                                    <hr></hr>
                                    <p id="proyecto1" className="texto-proyectos txts-left">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </div>

                            <div className="proyectos">
                                <div>
                                    <label for="proyecto2">
                                        <b>PROYECTO 2</b>
                                    </label>
                                    <hr></hr>
                                    <p id="proyecto2" className="texto-proyectos txts-right">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                                <img className="imgs-proyectos imgs-right" src="https://images.wallpaperscraft.com/image/single/landscape_usa_river_sky_malibu_california_clouds_hdr_nature_79461_1280x720.jpg" alt="sample-img"></img>
                            </div>

                            <div className="proyectos">
                                <img className="imgs-proyectos imgs-left" src="https://images.wallpaperscraft.com/image/single/landscape_usa_river_sky_malibu_california_clouds_hdr_nature_79461_1280x720.jpg" alt="sample-img"></img>
                                <div>
                                    <label for="proyecto3">
                                        <b>PROYECTO 3</b>
                                    </label>
                                    <hr></hr>
                                    <p id="proyecto3" className="texto-proyectos txts-left">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </div>

                            <div className="proyectos">
                                <div>
                                    <label for="proyecto4">
                                        <b>PROYECTO 4</b>
                                    </label>
                                    <hr></hr>
                                    <p id="proyecto4" className="texto-proyectos txts-right">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                                <img className="imgs-proyectos imgs-right" src="https://images.wallpaperscraft.com/image/single/landscape_usa_river_sky_malibu_california_clouds_hdr_nature_79461_1280x720.jpg" alt="sample-img"></img>
                            </div>

                        </div>

                    </div>
                </body>
                <Footer></Footer>
            </>
        );
    }
}
export default PortfolioPage;
