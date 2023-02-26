import React from "react";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import Slideshow from"../components/slides";

import '../styles.css';


class HomePage extends React.Component{
    render(){
        return(
            <>                        
      <div className="App">
        <Navbar></Navbar>       
        <Slideshow></Slideshow>      
        <body>

          <div className="webpage-content">

            <div className="resumen-container">
              <div className="resumen">
                <label for="texto-resumen"><b>Resumen de la Empresa:</b></label>
                <hr></hr>
                <p id="texto-resumen">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <img className="imagen-resumen" src="https://images.wallpaperscraft.com/image/single/landscape_usa_river_sky_malibu_california_clouds_hdr_nature_79461_1280x720.jpg" alt="sample-img"></img>
            </div>

            <div className="oficinas-container">
              <div className="oficinas">
                <label for="oficinas-list"><b>Oficinas:</b></label>
                <hr></hr>
                <ul className="oficinas-list">
                  <li>Street placeholder, number placeholder, city placeholder</li>
                  <li>Street placeholder, number placeholder, city placeholder</li>
                  <li>Street placeholder, number placeholder, city placeholder</li>
                </ul>
              </div>
              <img className="mapa-placeholder" src="https://www.howtogeek.com/wp-content/uploads/2022/08/Google-Maps-icon-on-map.png?height=200p&trim=2,2,2,2" alt="sample-map"></img> 
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
