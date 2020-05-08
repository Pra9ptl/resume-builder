import React from 'react';
import InputField from '../../../UI/InputField/InputField';
import Button from '../../../UI/Button/Button';
import ExpansionPanel from '../../../../hoc/ExpansionPanel/ExpansionPanel';

const EducationItem = React.memo(props => {
    const fieldList = [
        ["0", "DEGREE NAME", "text", "Bachelor of Something"],
        ["1", "COLLEGE/UNIVERSITY", "TEXT", "XYZ College"],
        ["2", "STARTING YEAR", "number", "2020"],
        ["3", "ENDING YEAR", "number", "2021"],
        ["4", "GPA/AGGREGATE", "number", "4"]
    ];
    let fields = [];

    fields.push(fieldList.map(field => {
        return <InputField
            type={field[2]}
            label={field[1]}
            default={field[3]}
            key={field[0]}
            {...props} />;
    }));
    fields.push(<Button />);
    return (
        <ExpansionPanel>
            {fields}
        </ExpansionPanel>
    );
});

export default EducationItem;