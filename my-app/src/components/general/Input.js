//import general.css
import "./css/general.css";

//create a functional component called Input. Imput accepts these props: label, type, className, value, setValue, icon, inputAttributes
// Inputs return value must contain a html input with the appropriate attributes from the props

const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {

const handleInput = (e) => {

    setValue(e.target.value);
};

return (
    <div className={`input ${className}`}>
        {label && <label>{label}</label>}
        <div className="input-container">

            {icon && <i className={icon}></i>}

            <input

            type={type}

            value={value}

            onChange={handleInput}

            {...inputAttributes}
            />

        </div>

    </div>
);
};

export default Input;