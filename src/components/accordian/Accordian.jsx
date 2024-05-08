import React, { useState } from 'react';
import "./accordian.css"
import { plus } from '../../assets';

const Accordian = () => {
    const [selected, setSelected] = useState(null);

    const handleAccordian = (i) => {
        if (selected === i) {
            setSelected(null);
        } else {
            setSelected(i);
        }
    }

    const data = [{
        heading: "Do you offer freelancers?",
        para: "If unhappy with a project, communicate with the freelancer, allow for revisions."
    },
    {
        heading: "What’s the guarantee that I will be satisfied with the hired talent?",
        para: "If unhappy with a project, communicate with the freelancer, allow for revisions."
    },
    {
        heading: "Can I hire multiple talents at once?",
        para: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
    },
    {
        heading: "Why should I not go to an agency directly?",
        para: "If unhappy with a project, communicate with the freelancer, allow for revisions."
    },
    {
        heading: "Who can help me pick a right skillset and duration for me?",
        para: "If unhappy with a project, communicate with the freelancer, allow for revisions."
    },
    ]

    return (
        <div className='accordian_parent'>
            {data.map((item, i) => {
                return (
                    <div className='accordian' key={i}>
                        <div className='accordian_title' onClick={() => handleAccordian(i)}>
                            <h4>{item.heading}</h4>
                            <img src={plus} alt="" />
                        </div>
                        {selected === i && <div className='accordian_para'>
                            <p>{item.para}</p>
                        </div>}
                    </div>
                )
            })}

        </div >
    )
}

export default Accordian