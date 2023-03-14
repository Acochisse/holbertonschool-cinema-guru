import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './general.css';
import PropTypes from 'prop-types';

const SearchBar = ({title, setTitle}) => {
    handleInputChange = (event) => {
        setTitle(event.target.value);
    }

    return (
        <div className="search-bar">
            <FontAwesomeIcon className="search-icon" icon="search"/>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
            placeholder="search"/>
        </div>
    );
};

SearchBar.propTypes = {
    title: PropTypes.string.isRequired,
    setTitle: PropTypes.func.isRequired
};

SearchBar.defaultProps = {
};

export default SearchBar;
