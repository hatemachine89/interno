import React from 'react'
import CurtainCard from '../../resuable/curtainCard'
import { teamData } from './data'


const TeamCard = () => {
  return (
    <>
        <div className='team-cards section'>
              <h2>Meet the people who make it possible</h2>
                <div className='teamcard-wrapper'> 
                    {teamData.map((item) => (
                      <CurtainCard
                        image={item.pic}
                        name={item.name}
                        field={item.field}
                        city={item.city}
                        phone={item.phone}
                        email={item.email}
                    />
                    ))}
                </div>
        </div>


    </>
)}

export default TeamCard
