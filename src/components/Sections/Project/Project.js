import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import ProjectItem from './ProjectItem/ProjectItem'

const Project = React.memo(props => {
    const [internshipList, setInternshipList] = useState([]);

    const addEducationItemHandler = () => {
        setInternshipList(internshipList.concat(<ProjectItem count={internshipList.length + 1} key={internshipList.length + 1} />));
    };

    return (
        <div>
            {internshipList}
            <Button clicked={addEducationItemHandler} type="add" />
        </div>
    );
});

export default Project;