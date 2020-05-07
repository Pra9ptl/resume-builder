import React from 'react';
import './personalInformation.css';
import TextField from '@material-ui/core/TextField';

const inputField = React.memo(props => {
    return (
        <div className="form-control">
            <TextField
                className="inputTextField"
                id="outlined-basic"
                label="Full Name"
                variant="outlined" />
            <TextField
                className="inputTextField"
                id="outlined-basic"
                type="email"
                label="Email Id"
                variant="outlined" />
            <TextField
                className="inputTextField"
                id="outlined-basic"
                label="Date of birth"
                variant="outlined" />
            <TextField
                className="inputTextField"
                id="outlined-multiline-static"
                label="Address"
                multiline
                rows={4}
                variant="outlined"
            />
        </div>
    );
});

export default inputField;