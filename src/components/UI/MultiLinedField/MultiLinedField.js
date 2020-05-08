import React from 'react';
import TextField from '@material-ui/core/TextField';
import './MultiLinedField.css'

const multiLinedField = React.memo(props => {
    return (
        <TextField
            className="MultiLinedField"
            id="outlined-multiline-static"
            label={props.label}
            type={props.type}
            defaultValue={props.default}
            multiline
            rows={4}
            variant="outlined"
        />
    );
});

export default multiLinedField;