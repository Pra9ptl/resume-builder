import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

const education = React.memo(props => {
    let degItems = [];

    const addEducationItemHandler = () => {
        degItems.push("Item");
    };

    return (
        <div>
            {degItems.length !==0 && degItems.map((deg, index) => {
                return <p key={index}>{deg}</p>;
            })} 
            <IconButton onClick={addEducationItemHandler}>
                <AddIcon style={{ color: "#27AE60" }} />
            </IconButton>
        </div>
    );
});

export default education;