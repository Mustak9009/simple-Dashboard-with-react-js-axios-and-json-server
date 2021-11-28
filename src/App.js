import React from 'react';
import {Routes,Route} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
//Import components
import Home from './Components/Pages/DashboardMain/Home';


export default function App(){
    return(
        <>
            <NavBar/>
            <Routes>
                    <Route  path="/" element={<Home/>}/>
                    <Route  path="/home" element={<Home/>}/>
                    <Route  path="/analytics" element={<Home/>}/>
                    <Route  path="/sales" element={<Home/>}/>
            </Routes>
        </>
    )
}
