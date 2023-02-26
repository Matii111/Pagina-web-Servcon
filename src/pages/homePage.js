import React from "react";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import Slideshow from "../components/slides";
import Map from "../components/maps";
import '../styles.css';


class HomePage extends React.Component {
  render() {
    return (
      <>
        <div className="App">
          <Navbar></Navbar>
          <Slideshow></Slideshow>
          <body>

            <div className="webpage-content">

              <div className="resumen-container">
                <div className="resumen">
                  <label for="texto-resumen">
                    <b>RESUMEN DE LA EMPRESA:
                    </b>
                  </label>
                  <hr></hr>
                  <p id="texto-resumen">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <img className="imagen-resumen" src="https://images.wallpaperscraft.com/image/single/landscape_usa_river_sky_malibu_california_clouds_hdr_nature_79461_1280x720.jpg" alt="sample-img"></img>
              </div>
              <div className="resumen-container">
                <div className="resumen">
                  <label for="texto-resumen">
                    <b>RESUMEN DE LA EMPRESA:
                    </b>
                  </label>
                  <hr></hr>
                  <p id="texto-resumen">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <img className="imagen-resumen" src="https://images.wallpaperscraft.com/image/single/landscape_usa_river_sky_malibu_california_clouds_hdr_nature_79461_1280x720.jpg" alt="sample-img"></img>
              </div>

              <div className="oficinas-container">
                <div className="oficinas">
                  <label for="oficinas-list"><b>Oficinas:</b></label>
                  <hr></hr>
                  <ul className="oficinas-list">
                    <li>Valenzuela Castillo 1388-1330, Providencia, Región Metropolitana</li>
                  </ul>
                </div>
                <div className="oficinas-map">
                  <Map />
                </div>

              </div>

            </div>

            <img className="bottom-image" src="https://www.wallpapertip.com/wmimgs/70-700344_4k-image-sample.jpg" alt="bottom-image-placeholder"></img>

          </body>
          <Footer></Footer>
        </div>
      </>
    );
  }
}
export default HomePage;
