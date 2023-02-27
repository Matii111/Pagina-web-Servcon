import React from "react";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import "../styles.css";
import isInViewport from "../operations/viewportChecker";
import handleScroll from "../operations/scrollHandler";
import midScroll from "../operations/midScroller";

class AboutPage extends React.Component {
    render() {
        return (
            <>
                <Navbar></Navbar>
                <body>
                    <div className="webpage-content">

                        <div className="about-container">

                            <div className="scroll-tip" onClick={midScroll}>

                                <p>Haga click o baje para ver más</p>
                                <i className="arrow-down"></i>

                            </div>

                            <div className="about">
                                <img className="imgs-about imgs-left" src="https://images.wallpaperscraft.com/image/single/landscape_usa_river_sky_malibu_california_clouds_hdr_nature_79461_1280x720.jpg" alt="sample-img"></img>
                                <div>
                                    <label for="about1">
                                        <b>PLACEHOLDER 1</b>
                                    </label>
                                    <hr></hr>
                                    <p id="about1" className="texto-about txts-left">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </div>

                            <div className="about hidden">
                                <div>
                                    <label for="about2">
                                        <b>PLACEHOLDER 2</b>
                                    </label>
                                    <hr></hr>
                                    <p id="about2" className="texto-about txts-right">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                                <img className="imgs-about imgs-right" src="https://images.wallpaperscraft.com/image/single/landscape_usa_river_sky_malibu_california_clouds_hdr_nature_79461_1280x720.jpg" alt="sample-img"></img>
                            </div>

                        </div>

                    </div>
                </body>
                <Footer></Footer>
            </>
        );
    }
}
export default AboutPage;
