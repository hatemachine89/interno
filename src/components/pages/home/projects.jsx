import React from "react";
import { FaArrowRight } from "react-icons/fa"
import { projectData } from "../../../data";
import Counter from "../../resuable/counter";


function Projects(){
return(
    <div>
        <div className="projects_wrapper">
            <h2>Follow Our Projects</h2>
            <span>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</span>

            <div className="project_cardwrapper">
                <div className="project_grid">
                    {projectData.map((item) => (
                        <div className="project_card"> 
                        <img src={item.projectImg}  className="project_image" alt=""/> 
                    
                        <div className="horizontal_wrapper">
                        <div className="project_datawrapper">
                        <h4>{item.projectTitle}</h4>
                        <span>{item.projectTag}</span>
                        </div>
                        <div className="icon_wrapper">
                        <FaArrowRight
                            style={{
                                color:'#CDA274'
                            }}
    
                        />
    
                        </div>
                        </div>
                        </div>

                    ))}
                    

                   


                    
                </div>
            </div>
        </div>


<div className="counter_section">
    <div className="counterWrapper">
    <Counter 
    number="12"
    tagline="Years Of Experience"
    />
    <div className="seperator_bar"></div>
    <Counter 
    number="85"
    tagline="Successful Projects"
    />
    <div className="seperator_bar"></div>
    <Counter 
    number="15"
    tagline="Active Projects"
    />    <div className="seperator_bar"></div>
<Counter 
    number="95"
    tagline="Happy Customers"
    />
    </div>

</div>



    </div>
);
}

export default Projects;