import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import './home.css';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nqk6pht', 'template_grtd1tp', form.current, '3dMJdCmALptC8uIe4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <form ref={form} onSubmit={sendEmail} className='cardDiv grid'>
            <div className="destinationInput">
                <label htmlFor="city">Enter your name:</label>
                <div className="input flex">
                    <input type="text" placeholder='Enter name here...' name="user_name" />
                    <GrLocation className='icon' />
                </div>
            </div>
            <div className="destinationInput">
                <label htmlFor="city">Enter your Email:</label>
                <div className="input flex">
                    <input type="text" placeholder='Enter your email here...' name="user_email" />
                    <GrLocation className='icon' />
                </div>
            </div>

            <div className="dateInput">
                <label htmlFor="date">Select your date of Arrival:</label>
                <div className="input flex">
                    <input type="date" name="arrival_date" />
                </div>
            </div>
            <div className="destinationInput">
                <label htmlFor="city">Enter your Country</label>
                <div className="input flex">
                    <input type="text" placeholder='Enter your country' name='destination' />
                    <GrLocation className='icon' />
                </div>
            </div>
            <div className="destinationInput">
                <label htmlFor="city">Enter the Number of People</label>
                <div className="input flex">
                    <input type="text" placeholder='Enter the no of people' name='no_of_people' />
                    <GrLocation className='icon' />
                </div>
            </div>
            <div className="destinationInput">
                <label htmlFor="city">Enter the Number of Days</label>
                <div className="input flex">
                    <input type="text" placeholder='Enter the no days' name='no_of_days' />
                    <GrLocation className='icon' />
                </div>
            </div>

            <div className="searchOptions flex">
                <HiFilter className='icon' />
                <button type="submit" value="send">INQUIRE !</button>
            </div>
        </form>
    );
};

export default ContactUs;


