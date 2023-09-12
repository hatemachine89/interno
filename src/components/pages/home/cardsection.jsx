import React from "react";
import TransparentCards from "../../resuable/transparentCard";
import {servicesData} from './data'


function Cardsection() {
return(
<div className="transparent_cardwrapper">
    {servicesData.map((item) => (
        <TransparentCards
            title={item.title}
            description={item.description} 

        />
    ))}
</div>
)};

export default Cardsection;