import React from "react";
import projectImage from "../assets/projectcard.png"
import { FaArrowRight } from "react-icons/fa"
import { projectData } from "./data";


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
                        <img src={projectImage}  className="project_image"/> 
                    
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

    </div>
);
}

export default Projects;