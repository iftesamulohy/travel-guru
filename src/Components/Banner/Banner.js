import React from 'react';
import { CardGroup, UncontrolledCarousel } from 'reactstrap';
import SinglePlace from '../SinglePlace/SinglePlace';
const travelData = [
    {
        "name": "Cox's bazar",
        "subtitle": "Cox's bazar",
        "img":"https://i.ibb.co/3rGGnrP/Sajek.png"
    },
    {
        "name": "Sreemangal",
        "subtitle": "Cox's bazar",
        "img":"https://i.ibb.co/ynxz3dg/Sreemongol.png"
    },
    {
        "name": "Sundarban",
        "subtitle": "Cox's bazar",
        "img":"https://i.ibb.co/phzKV5D/sundorbon.png"
    }
];
  

const Banner = () => {
    return (
        <div>
            <CardGroup>
                {
                    travelData.map(pd=><SinglePlace product={pd}></SinglePlace>)
                }
            </CardGroup>
        </div>
    );
};

export default Banner;