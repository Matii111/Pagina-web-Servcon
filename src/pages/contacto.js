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
                            <label className="label-box-container" for="contact-info">
                                CONTACTANOS
                            </label>
                            <hr>
                            </hr>
                            <p className="contact-info">correo.de.ejemplo@servcon.cl</p>
                            <p className="contact-info" id="number"> +56 9 XXXX XXXX</p>
                            <body className="body-box-container">
                                <label className="label-box">
                                    Nombres
                                </label>
                                <input alt="nombres" type="text" className="input-box" placeholder="John Smith">
                                </input>
                                <label className="label-box">
                                    E-mail
                                </label>
                                <input alt="email" type="email" className="input-box" placeholder="johnsmith@example.com">
                                </input>
                                <label className="label-box">
                                    Comuna
                                </label>
                                <input alt="comuna" type="text" className="input-box" placeholder="¿En cuál comuna reside usted?">
                                </input>
                                <label className="label-box">
                                    Teléfono
                                </label>
                                <input alt="telefono" type="text" className="input-box" placeholder="¿Cuál es su número para contacto?">
                                </input>
                                <label className="label-box">
                                    Asunto
                                </label>
                                <input alt="asunto" type="text" className="input-box" placeholder="¿Qué asunto desea tratar?">
                                </input>
                                <label className="label-box">
                                    Mensaje
                                </label>
                                <textarea alt="mensaje" type="text" placeholder="Escriba en esta casilla su mensaje.">
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