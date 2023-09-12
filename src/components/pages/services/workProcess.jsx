import React from 'react'
import IconCard from '../../resuable/iconCard'
import { workProcessData } from './data'
import JoinUs from "../../resuable/joinUs";


const WorkProcess = () => {
  return (
    <>
        <div className='work-section section'>
          <h2> How We Work</h2>
          <span>It is a long established fact  will be distracted.Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
            <div className='workcardwrapper'> 
            {workProcessData.map((item) => (
                  <IconCard 
                    title={item.title}
                    description={item.description}
                    stepNumber={item.stepNumber}
                    image={item.image}
                    icon={item.icon}
                    reverseColumn={item.reverseColumn}
                  />
                ))}
            </div>
      </div>
      <div className='join-us Section'>
              <JoinUs
              title="Wanna Join The Interno ?"
              description="It is a long established fact will be distracted."
              buttonText="Get Started"
              />
      </div>   
    </>
  )}

export default WorkProcess
