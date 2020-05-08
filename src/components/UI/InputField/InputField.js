import React from 'react';
import TextField from '@material-ui/core/TextField';
import './InputField.css';

const inputField = React.memo(props => {
    return (
        <TextField
            label={props.label}
            type={props.type}
            className="inputField"
            defaultValue={props.default}
            InputLabelProps={{
                shrink: true,
            }}
        />
    );
});

export default inputField;