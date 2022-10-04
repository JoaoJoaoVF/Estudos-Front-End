import { useState, useEffect } from 'react';
import Dashboard from '../layouts/dashboard';
import { useTranslation } from 'react-i18next';
import Card from '../components/core/Card';
import 'chart.js/auto';
import { Doughnut, Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import faker from 'faker';



// import Footer from "./pages/components/Footer";
import Navbar from "../pages/components/Navbar";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "../utils/PrivateRoute";
import { AuthProvider } from "../context/AuthContext";
import Home from "../pages/homePage";
import Login from "../pages/login";
import Register from "../pages/register";
import ProtectedPage from "../pages/Protected";


import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: '#59ddaa',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: '#fe3a82',
        },
    ],
};

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
export default function About() {


    const doughnutOptions = {
        data: {
            datasets: [
                {
                    data: [11, 39, 50],
                    /**
                     * These colors come from Tailwind CSS palette
                     * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
                     */
                    backgroundColor: ['#59ddaa', '#9c64f2', '#fe3a82'],
                    label: 'Dataset 1',
                },
            ],
            labels: ['Shoes', 'Shirts', 'Bags'],
        },
        options: {
            responsive: true,
            cutoutPercentage: 80,
        },
        legend: {
            display: false,
        },
    }



    let { user } = useContext(AuthContext);
    // console.log(useContext(AuthContext));

    return (
                <div className="flex flex-col min-h-screen overflow-hidden">
                    {/* <AuthProvider> */}
                    <Navbar />
                    <Routes>
                        {/* <PrivateRoute component={ProtectedPage} path="/protected" exact /> */}
                        {/* <Route path='/protected'> {!user ? <Navigate to="/login" /> : <ProtectedPage />}</Route>; */}
                        <Route path='/protected' element={!user ? <Navigate to="/login"/> : <ProtectedPage />} />
                        
                        <Route path="/login" element={<Login/>} />
                        <Route path="/register" element={<Register/>} />
                        {/* <Route path="/" element={<Home/>} /> */}
                    </Routes>
                    {/* </AuthProvider> */}
                </div>
    );
}

