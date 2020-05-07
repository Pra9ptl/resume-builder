import React from 'react';
import TextField from '@material-ui/core/TextField';

const multiLinedField = React.memo(props => {
    return (
        <div>
            <TextField
                className="inputTextField"
                id="outlined-multiline-static"
                label={props.label}
                type={props.type}
                multiline
                rows={4}
                variant="outlined"
            />
        </div>
    );
});

export default multiLinedField;