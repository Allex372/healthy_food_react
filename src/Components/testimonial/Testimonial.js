import React from "react";
import './testimonial.css';
import img1 from '../../img/testimonial/rbUCqO2zGk 1.png';
import img2 from '../../img/testimonial/Vector 3 (1).png';
import Rataing from "../../Items/rating/Rataing";

function Testimonial() {
    return (
        <div className='testimonial-main'>
            <div className='testimonial-wrapper'>
                <p className='features-p-small'>Testimonial</p>
                <p className='features-p-big'>Making Food great again and again</p>
                <p className='features-item-p-small center'>You need not only Just Food Stalls with Persons but also
                    specialized equipment, Skills to manage Customers, Effective Product catlogues etc to make your.
                </p>
                <div className='img-wrapper'>
                    <img src={img1}/>
                    <img className='testimonial-img-absolute' src={img2}/>
                </div>
                <p className='features-item-p-small center'>You need not only Just Food Stalls with Persons but also
                    specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful
                    to make your.</p>
                <div className='rating-wrapper'>
                    <Rataing default={4}/>
                </div>
                <p className='features-item-p-small center big'>Augusta W. Reynoso</p>
                <p className='features-item-p-small center'>UI&UX DeSIGNER</p>
            </div>
        </div>
    )
}

export default Testimonial;
