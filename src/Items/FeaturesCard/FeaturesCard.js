import React from "react";
import './FeaturesCard.css';
import {featuresItems} from '../../constants/features-items';


function FeaturesCard() {
    return (
        <div className='card-main'>
            {
                featuresItems.map(item =>
                    <div className='card' key={item.id}>
                        <div
                            style={
                                (item.color === 'F4F6EB' ? {backgroundColor: '#F4F6EB'} : null) ||
                                (item.color === 'FDF1EE' ? {backgroundColor: '#FDF1EE'} : null) ||
                                (item.color === 'FBF1E7' ? {backgroundColor: '#FBF1E7'} : null)
                            }
                            className='backGround-img'>
                            <img src={item.img} alt='logo'/>
                        </div>
                        <p className='features-item-p-big'>{item.title}</p>
                        <p className='features-item-p-small'>{item.description}</p>
                    </div>
                )
            }
        </div>
    )
}

export default FeaturesCard;
