import './App.css';
import React from 'react';
import Navbar from './components/navbar'; 
import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <body>
          <h1>Bienvenido</h1>
        </body>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
