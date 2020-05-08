import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import InputField from '../../UI/InputField/InputField';

const hobbies = React.memo(props => {
    const [hobbiesList, setHobbiesList] = useState([]);

    const addHobbiesHandler = () => {
        const fieldCnt = hobbiesList.length + 1;
        setHobbiesList(hobbiesList.concat(
            <InputField type="text" label={"Hobbies #" + fieldCnt} default="Hobbies/Interests" key={hobbiesList.length + 1} {...props} />
        ));
    };

    return (
        <div>
            {hobbiesList}
            <Button clicked={addHobbiesHandler} type="add" />
        </div>
    );
});

export default hobbies;