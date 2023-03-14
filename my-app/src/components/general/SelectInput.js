import React from 'react';
import './general.css';
import PropTypes from 'prop-types';

//create a function that takes in the following props: label, options, className, value, setValue
const SelectInput = ({ label, options, className, value, setValue }) => {

    handleSelect = (e) => {

        setValue(e.target.value);
    }

    return (
        <div className={`input ${className}`}>
            {label && <label>{label}</label>}
            <select value={value} onChange={handleSelect}>
                {options.map(option => 
                (<option key={option.value} value={option.value}>
                    {option.text}
                    </option>)
                )}
            </select>
            </div>
    );
                };

SelectInput.propTypes = {
    label: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    className: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func.isRequired
};

SelectInput.defaultProps = {
    label: '',
    className: '',
    value: ''
};
    
                
export default SelectInput;
