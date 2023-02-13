import React from "react";
import "../styles.css";
import HomePage from "./homePage";
import { Navigate, Route, Routes } from 'react-router-dom'

function MainPage() {
    return (
        <div>
            <Routes>
                <Route path='/home' element={<HomePage />} />
                <Route path='/' element={<Navigate replace to="/home" />} />                
            </Routes>
        </div>

    );
}
export default MainPage;