import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

class Contacto extends React.Component {
    render() {
        return (
            <>
                <div>
                    <Navbar />
                    <div className="background-img"></div> 
                    <div className="contact-box">
                        <div>
                            <label className="label-box-container">
                                CONTACTANOS
                            </label>
                            <hr>
                            </hr>
                            <body className="body-box-container">
                                <label className="label-box">
                                    Nombre
                                </label>
                                <input alt="nombre" type="text" className="input-box">
                                </input>
                                <label className="label-box">
                                    E-mail
                                </label>
                                <input alt="email" type="email" className="input-box">
                                </input>
                                <label className="label-box">
                                    Comuna
                                </label>
                                <input alt="comuna" type="text" className="input-box">
                                </input>
                                <label className="label-box">
                                    Teléfono
                                </label>
                                <input alt="telefono" type="text" className="input-box">
                                </input>
                                <label className="label-box">
                                    Asunto
                                </label>
                                <input alt="asunto" type="text" className="input-box">
                                </input>
                                <label className="label-box">
                                    Mensaje
                                </label>
                                <textarea alt="mensaje" type="text">
                                </textarea>
                                <button className="button-box">
                                    Enviar
                                </button>
                            </body>
                            <div>

                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            </>
        );
    }
}

export default Contacto;