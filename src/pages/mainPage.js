import React from "react";
import "../styles.css";
import HomePage from "./homePage";
import { Navigate, Route, Routes } from 'react-router-dom'
import { Grid } from "react-loader-spinner";
import { useState, useEffect } from "react";
import PortfolioPage from "./portfolioPage";
import AboutPage from "./aboutPage";
import Contacto from "./contacto";

function MainPage() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)

    }, [])
    return (
        <div>
            {
                loading ?
                    <Grid
                        wrapperClass="loader"
                        color="#00549f" />
                    :
                    <Routes>
                        <Route path='/home' element={<HomePage />} />
                        <Route path='/' element={<Navigate replace to="/home" />} />
                        <Route path='/quienes-somos' element={<AboutPage />} />
                        <Route path='/portafolio' element={<PortfolioPage />} />
                        <Route path='/contacto' element={<Contacto />} />
                    </Routes>
            }
        </div>

    );
}
export default MainPage;