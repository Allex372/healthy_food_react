import React from "react";
import './take.css';

import img1 from '../../img/take/shot 1.png'
import img2 from '../../img/take/apple 1.png';
import img3 from '../../img/take/Group (1).png';

function Take() {
    return (
        <div className='take-main'>
            <div className='take-wrapper'>
                <div className='take-flex'>
                    <p className='features-p-small'>Take Away</p>
                    <p className='features-p-big'>Food Stalls with Persons but  to  Product marketing plane. </p>
                    <p className='features-item-p-small'>There are many things are needed to start the Fast Food
                        Business.
                        You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage
                        Customers.
                    </p>
                    <div className='take-flex-row'>
                        <div className='href href-left'>
                            <img src={img2}/>
                            <p>App Store</p>
                        </div>
                        <div className='href href-right'>
                            <img src={img3}/>
                            <p>Google Play</p>
                        </div>
                    </div>
                </div>
                <img className='img-absolute' src={img1}/>
            </div>
        </div>
    )
}

export default Take;
