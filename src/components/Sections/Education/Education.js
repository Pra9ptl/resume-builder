import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import EducationItem from './EducationItem/EducationItem';

const education = React.memo(props => {
    let degItems = [];

    const addEducationItemHandler = () => {
        degItems.push("Item");
    };

    return (
        <div>
            <EducationItem />
            <IconButton onClick={addEducationItemHandler}>
                <AddIcon style={{ color: "#27AE60" }} />
            </IconButton>
        </div>
    );
});

export default education;