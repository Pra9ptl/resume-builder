import React from 'react';
import InputField from '../../UI/InputField/InputField';

const personalInformation = React.memo(props => {
    const fieldList = [
        ["0","FULL NAME","text", "Abc Xyz"],
        ["1","EMAIL","email","abc@gmail.com"],
        ["2","DATE OF BIRTH","date", ""],
        ["3","ADDRESS","text","#123 Street, City, State, Country"]
    ];
    return (
        <div>
            {fieldList.map((field) => {
                return <InputField
                    type={field[2]}
                    label={field[1]}
                    default={field[3]}
                    key={field[0]}
                    {...props} />;
            })}
        </div>
    );
});

export default personalInformation;