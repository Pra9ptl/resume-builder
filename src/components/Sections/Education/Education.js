import React, { useState } from 'react';
import EducationItem from './EducationItem/EducationItem';
import Button from '../../UI/Button/Button';

const education = React.memo(props => {
    const [inputList, setInputList] = useState([]);

    const addEducationItemHandler = () => {
        setInputList(inputList.concat(<EducationItem count={inputList.length + 1} key={inputList.length + 1} />));
    };

    return (
        <div>
            {inputList}
            <Button clicked={addEducationItemHandler} type="add" />
        </div>
    );
});

export default education;