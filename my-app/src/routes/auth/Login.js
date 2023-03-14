import './auth.css';
import React, { useState } from 'react';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';

const Login = (username, password, setUsername, setPassword) => {
    return (
        <div className="signin-container">

            <div className="signin-form">

                <div className="signin-form-header">

                    <h1>Sign in with your account</h1>
                    
                </div>

                <div className="signin-form-body">
                    <Input
                    label="Username:"
                    type="text"
                    className="input-text"
                    value={username}
                    setValue={setUsername}
                    icon="user"
                    inputAttributes={{ placeholder: 'Username' }}
                    />

                    <Input
                    label="Password:"
                    type="password"
                    className="input-password"
                    value={password}
                    setValue={setPassword}
                    icon="key"
                    inputAttributes={{ placeholder: 'Password' }}
                    />
                    <Button
                    label="Sign in"
                    className="btn-signin"
                    icon="key"
                    onClick={() =>
                        console.log(`Sign in ${username}`)}
                    />

                </div>
            </div>
            </div>
    );
};
export default Login;
