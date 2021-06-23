import React from "react";
import './about_us.css';
import ButtonOrange from "../../Items/OrangeButton/ButtonOrange";

import img from '../../img/about_us/FmlS61J9LP 1.png'
import img1 from '../../img/about_us/Vector 3.png';

function About_Us() {
    return (
        <div className='about-main'>
            <img className={'vector'} src={img1}/>
            <img src={img} alt='logo'/>
            <div className='about-main-right'>
                <p className='features-p-small'>About us</p>
                <p className='features-p-big'>Food Stalls with Persons but to Product marketing plane
                    catlogues etc to. </p>
                <p className='features-item-p-small'>There are many things are needed to start the Fast Food Business.
                    You need not only Just Food Stalls with Persons but also
                    equipment make your marketing plane Effective.</p>
                <ButtonOrange title='Read More'/>
            </div>
        </div>
    )
}

export default About_Us;
