import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from '@material-ui/icons/Delete';

const inputField = React.memo(props => {

    let btnTpye = "";
    let btnColor = "";

    switch (props.type) {
        case 'add':
            btnColor = "primary";
            btnTpye = <AddIcon />;
            break;
        case 'delete':
            btnColor = "secondary";
            btnTpye = <DeleteIcon />;
            break;
        default:
            break;
    }

    return (
        <IconButton onClick={props.clicked} color={btnColor} >
            {btnTpye}
        </IconButton>
    );
});

export default inputField;