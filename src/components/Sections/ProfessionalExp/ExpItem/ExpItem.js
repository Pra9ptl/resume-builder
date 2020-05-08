import React from 'react';
import InputField from '../../../UI/InputField/InputField';
import Button from '../../../UI/Button/Button';
import ExpansionPanel from '../../../../hoc/ExpansionPanel/ExpansionPanel';

const ExpItem = React.memo(props => {
    const fieldList = [
        ["0", "COMPANY/ORGANIZATION NAME", "text", "Amazon"],
        ["1", "DESCRIPTION", "TEXT", "Software Development Intern"],
        ["2", "GUIDE/SUPERVISOR", "number", "Prof. X"],
        ["3", "START", "number", "Sept, 2020"],
        ["4", "END", "number", "Dec, 2020"],
        ["5", "TEAM SIZE", "number", "0"]
    ];

    const renderFields = fieldList.map(field =>
        <div key={field[0]}>
            <InputField
                id={field[0]}
                type={field[2]}
                label={field[1]}
                default={field[3]}
            />
        </div>
    );

    return (
        <ExpansionPanel title={"Experience #" + props.count} >
            {renderFields}
            <Button type="delete" />
        </ExpansionPanel>
    );
});

export default ExpItem;