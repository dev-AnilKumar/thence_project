import React, { useState } from 'react';
import "./getproject.css"
import SuccessPage from '../../components/success-page/SuccessPage';
import ProjectForm from '../../components/getproject-form/ProjectForm';

const Getproject = () => {
    const [success, setSuccess] = useState(false);

    return (
        <div className='getproject'>
            {success ? <SuccessPage /> : <ProjectForm setSuccess={setSuccess} />}
        </div>
    )
}

export default Getproject