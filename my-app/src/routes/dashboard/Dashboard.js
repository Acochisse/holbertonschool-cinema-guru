import React from 'react';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import './dashboard.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Favorites from './Favorites';
import WatchLater from './WatchLater';


const Dashboard = (userUsername, setIsLoggedIn, handleSetUserUsername) => {
    const logout = () => {
        localStorage.removeItem('accessToken');
        setIsLoggedIn(false);
    }

    return(
        <div className="dashboard-container">
            <BrowserRouter>
            <Header 
            userUsername={userUsername}
            logout={logout}
            handleSetUserUsername={handleSetUserUsername}
            setIsLoggedIn={setIsLoggedIn}
            />
            <SideBar userUsername={userUsername} />
            <div className="dashboard-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<HomePage />} />
                    <Route path="/favorites" element={<Favorites/>} />
                    <Route path="/watchlater" element={<WatchLater/>} />

                </Routes>
            </div>
        </BrowserRouter>
    </div>
    )
}

export default Dashboard;
