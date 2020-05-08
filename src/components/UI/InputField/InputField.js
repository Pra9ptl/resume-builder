import React from 'react';
import TextField from '@material-ui/core/TextField';
import './InputField.css';

const inputField = React.memo(props => {
    return (
        <TextField
        variant="outlined"
            label={props.label}
            type={props.type}
            className="inputField"
            placeholder={props.default}
            InputLabelProps={{
                shrink: true,
            }}
        />
    );
});

export default inputField;