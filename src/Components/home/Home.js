import React from "react";
import './home.css';
import ButtonOrange from "../../Items/OrangeButton/ButtonOrange";

function Home() {
    return (
        <div className='home-main'>
            <div className='home-left'>
                <p className='home-left-p'>Making time a good time by making food the good food.</p>
                <p className='home-left-p-small'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment.</p>
                <div style={{marginTop: '50px'}} className='home-left-btn'>
                    <ButtonOrange title='Order Now'/>
                    <ButtonOrange title='Food Details' color='white'/>
                </div>
            </div>
            <div className='home-right'/>
        </div>
    )
}

export default Home;
