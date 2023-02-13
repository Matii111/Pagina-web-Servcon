import React from "react";
import '../styles.css';
import Navbar from "../components/navbar";
import Footer from '../components/footer';
class HomePage extends React.Component{
    render(){
        return(
            <>
      <div className="App">
        <Navbar></Navbar>
        <body>
          <h1>Bienvenido</h1>
        </body>
        <Footer></Footer>
      </div>
            </>
        );
    }
}
export default HomePage;
