import React from "react";
import './menu.css';
import ProductCard from "../../Items/ProductCard/ProductCard";

function Menu() {
    return (
        <div className='menu-main'>
            <p className='features-p-small'>Menu</p>
            <p className='features-p-big'>Food Full of treaty Love</p>
            <div className='wrapper'>
                <p className='features-item-p-small'>There are many things are needed to start the Fast Food Business.
                    You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage
                    Customers.
                </p>
            </div>
            <div className='menu-card'>
                <ProductCard/>
            </div>
        </div>
    )
}

export default Menu;
