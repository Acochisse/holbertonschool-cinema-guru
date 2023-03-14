import {React, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';
import PropTypes from 'prop-types';


const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {
    
    //use setValue as a prop to handle the change
    //error says setValue is not a function
    const handleInput = (e) => {
        setValue(e.target.value);
    };
    return (
        <div className={`input ${className}`}>
        {label && <label>{label}</label>}
        <div className="input-container">
            {icon && <FontAwesomeIcon icon={icon} />}
            <input
            type={type}
            value={value}
            onChange={handleInput}
            {...inputAttributes}
            />
        </div>
        </div>
    );
    }
    Input.defaultProps = {
        type: 'text',
        className: '',
        value: '',
        setValue: () => {},
        icon: null,

    };
    Input.propTypes = {
        label: PropTypes.string,
        type: PropTypes.string,
        className: PropTypes.string,
        value: PropTypes.string,
        setValue: PropTypes.func,
        icon: PropTypes.string,
        inputAttributes: PropTypes.object,
    };

export default Input;
