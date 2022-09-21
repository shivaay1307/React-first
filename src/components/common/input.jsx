import React from 'react';


// rest operator is used to insert all other properties in in put field used in javascript
const Input = ({ name, label, error, ...rest}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input {...rest} name={name} id={name} className="form-control enterDetails p-2 mt-2 mb-2" />
            {error && <div className='alert alert-danger fs-6 p-1 m-1 mb-3 '>{error}</div>}
        </div>
    );
}

export default Input;

