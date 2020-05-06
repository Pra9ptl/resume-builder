import React from 'react';
import './inputFields.css';

const inputField = props => {
    return (
        <div className="form-control">
            <label>{props.label}</label>
            <input
                type="text"
                name={props.label}
                placeholder={'Enter' + props.label}
                value={props.value} />
        </div>
    );
};

export default inputField;