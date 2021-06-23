import React from "react";
import './header.css';
import {headerItems} from "../../constants/header-items";
import ButtonOrange from "../OrangeButton/ButtonOrange";

function Header() {
    return (
        <div className='header-main'>
            <div className='header-logo'/>
            <div className='header-items'>
                {
                    headerItems.map(item => <div className='header-items-inside' key={item.id}>{item.title}</div>)
                }
            </div>
            <ButtonOrange title={'Booking Now'}/>
        </div>
    )
}

export default Header;
