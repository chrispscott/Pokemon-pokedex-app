import React from 'react';
import Nav from './Nav';
import FAN from '../assets/fan2.jpg';
import FAN3 from '../assets/fanart3.jpg';
import FAN4 from '../assets/fanart4.jpg';
import FAN5 from '../assets/fanart5.png';

const Favorites = (props) => {
    return (
        <div>
            <Nav/>
            <img src={FAN}/>
            <img src={FAN3}/>
            <img src={FAN4}/>
            <img src={FAN5}/>



            <h1>thank you </h1>
        </div>
    );
};

export default Favorites;