import React from 'react';

// rest operator is used to insert all other properties in in put field used in javascript
const Select = ({ name, label, options, error, ...rest }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select {...rest} name={name} id={name} className="form-control enterDetails p-2 mt-2 mb-2">
                <option value="" />
                {options.map(option => (
                    <option key={option._id} value={option._id}>
                        {option.name}
                    </option>
                ))}
            </select>
            {error && <div className='alert alert-danger fs-6 p-1 m-1 mb-3 '>{error}</div>}
        </div>
    );
};

export default Select;

