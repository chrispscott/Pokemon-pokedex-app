import React, { Component } from 'react'
import FAN from '../assets/fan1.jpg';

export default class Fanart extends Component {
    render() {
        return (
            <div>
                <img className='banner' src= {FAN}/>
            </div>
        )
    }
}
