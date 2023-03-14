import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navigation.css';

const Header = (userUsername, handleSetUserUsername, setIsLoggedIn, logout) => {
    return (
        <nav className="navbar">
            <ul>
                <li className='title'>
                    <p id='left'>Cinema Guru</p>
                </li>
                <li className="picAndName">
                    <img src="https://picsum.photos/100/100" alt='logo' />
                    <p>Welcome, {userUsername}</p>
                </li>
                <li>
                    <span className='logout' onClick={() => {
                    logout();
                    handleSetUserUsername('');
                    setIsLoggedIn(false);
                    console.log(`Logout {userUsername}`);}}>
                        <FontAwesomeIcon icon="sign-out-alt" />
                        <p>Logout</p>
                        </span>
                </li>
            </ul>
        </nav>
    );
                    };
                    export default Header;
                    