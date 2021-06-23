import React, {useEffect, useState} from "react";
import './product-card.css';
import service from "../../services/rainForestApi.service";

import img from '../../img/about_us/FmlS61J9LP 1.png';
import Rataing from "../rating/Rataing";
import ButtonOrange from "../OrangeButton/ButtonOrange";

function ProductCard() {
    const [values, setValues] = useState([]);
    const [initial, setInitial] = useState(true);

    useEffect(() => {
        async function Start() {
            setInitial(false)
            const initialState = await service.getData();
            setValues(initialState)
        }

        if (initial) {
            Start()
        }
    })


    return (
        <div className='productCard-wrapper'>
            {
                values.map(value =>
                    <div className='helper'>
                        <div className='productCard-main' id={value.id}>
                            <img src={value.image}/>
                            <div className='productCard-info'>
                                <p className='features-p-big margin'>{value.is_prime.toString()}</p>
                                <p className='features-p-big margin'>{value.price.raw}</p>
                            </div>
                            <p className='features-item-p-small margin'>{value.title}</p>
                            <div className='productCard-info margin-top1 margin'>
                                <button className='productCard-btn margin'>+</button>
                                <Rataing default={value.rating}/>
                            </div>
                        </div>
                    </div>
                )
            }
            <div style={{marginTop: '50px'}}>
                <ButtonOrange title='Learn More' color='white'/>
            </div>
        </div>
    )
}

export default ProductCard;



