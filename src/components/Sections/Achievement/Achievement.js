import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import InputField from '../../UI/InputField/InputField';

const achievement = React.memo(props => {
    const [achievementsList, setAchievementsList] = useState([]);

    const addAchievementHandler = () => {
        const fieldCnt = achievementsList.length + 1;
        setAchievementsList(achievementsList.concat(
            <InputField type="text" label={"Achievement #" + fieldCnt} default="Achievement Title" key={achievementsList.length + 1} {...props} />
        ));
    };

    return (
        <div>
            {achievementsList}
            <Button clicked={addAchievementHandler} type="add" />
        </div>
    );
});

export default achievement;