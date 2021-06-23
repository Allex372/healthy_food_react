import React from "react";
import './contact.css';

function Contact() {
    return (
        <div className='contact-main'>
            <div className='contact-wrapper'>
                <p className='features-p-small contact-margin'>Contact </p>
                <p className='features-p-big'>Food Stalls with Persons but also specialized equipment, Skills to
                    manage.
                </p>
                <div className='contact-form'>
                    <input type='text' value='Enter your message'/>
                    <button className='send'>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;
