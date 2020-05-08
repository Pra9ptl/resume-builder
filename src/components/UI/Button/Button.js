import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const inputField = React.memo(props => {
    return (
        <Button
            variant="contained"
            color="secondary"
            className="button"
            startIcon={<DeleteIcon />}
        >
            Delete
        </Button>
    );
});

export default inputField;