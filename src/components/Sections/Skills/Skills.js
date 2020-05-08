import React from 'react';
import MuitiLinedField from '../../UI/MultiLinedField/MultiLinedField';

const skills = React.memo(props => {
    const fieldList = [
        ["0","EXPERTISE AREA/AREA(S) OF INTEREST","text", ""],
        ["1","PROGRAMMING LANGUAGE(S)","email",""],
        ["2","TOOLS AND TECHNOLOGIES","date", ""],
        ["3","TECHNICAL ELECTIVES","text",""]
    ];
    return (
        <div>
            {fieldList.map((field) => {
                return <MuitiLinedField
                    type={field[2]}
                    label={field[1]}
                    default={field[3]}
                    key={field[0]}
                    {...props} />;
            })}
        </div>
    );
});

export default skills;