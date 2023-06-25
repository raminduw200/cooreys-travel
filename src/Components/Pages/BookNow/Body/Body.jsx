import React, { useEffect,useRef }from 'react'
import './body.css'
import emailjs from '@emailjs/browser';

import { BsBookmarkCheckFill } from 'react-icons/bs'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Aos from 'aos'
import 'aos/dist/aos.css'

const contries = ["United States", "Canada", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and/or Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecudaor", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France, Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kosovo", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfork Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbarn and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States minor outlying islands", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City State", "Venezuela", "Vietnam", "Virigan Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zaire", "Zambia", "Zimbabwe"]
const packages = ['Light Traveler', 'Explorer', 'Extreme Traveler', 'Custom']

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nqk6pht', 'template_vrui47r', form.current, '3dMJdCmALptC8uIe4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className='booknowBody'>
            <div className="container">
                <div className="secTitle">
                    <h3 data-aos="fade-right" className="title">
                        Book Now
                    </h3>
                </div>

                <form ref={form} onSubmit={sendEmail} className='booknowForm'  data-aos="fade-up" >
                    <div className="nameInput" data-aos="fade-up">
                        <label htmlFor='name'>Name</label>
                        <div className="input flex">
                            <input type='text' name='name' placeholder='Name' required />
                        </div>
                    </div>
                    
                    <div className="emailInput" data-aos="fade-up">
                        <label htmlFor='email'>Email</label>
                        <div className="input flex">
                            <input type='email' name='email' placeholder='Email' required />
                        </div>
                    </div>
                    
                    <div className="phoneInput" data-aos="fade-up">
                        <label htmlFor='phone'>Telephone</label>
                        <div className="input flex">
                            <input type='text' name='telephone' placeholder='Phone' required />
                        </div>
                    </div>
                    
                    <div className="countryInput" data-aos="fade-up">
                        <label htmlFor='country'>Country</label>
                        <div className="input flex">
                            <select name='country' required>
                                {contries.map((country, index) => <option key={index} value={country}>{country}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className="packagesInput" data-aos="fade-up">
                        <label htmlFor='packages'>Packages</label>
                        <div className="input flex">
                            <select name='packages' required>
                                {packages.map((package_, index) => <option key={index} value={package_}>{package_}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className="dateInput" data-aos="fade-up">
                        <label htmlFor='date'>Booking</label>
                        <div className="input flex">
                            <input type='date' name='arrivalDate' placeholder='arrivalDateDate' required />
                        </div>
                    </div>

                    <div className="adultsCountInput" data-aos="fade-up">
                        <label htmlFor='adlultsCount'>No. of Adults</label>
                        <div className="input flex">
                            <input type='text' name='adultsCount' placeholder='Adults count' required />
                        </div>
                    </div>

                    <div className="childCountInput" data-aos="fade-up">
                        <label htmlFor='childCount'>No. of Child</label>
                        <div className="input flex">
                            <input type='text' name='childCount' placeholder='Child count' required />
                        </div>
                    </div>

                    <div className="concrensInput" data-aos="fade-up">
                        <label htmlFor='concernsCount'>Your concerns</label>
                        <div className="input message flex">
                            <textarea name='concerns' placeholder='Your concerns' required />
                        </div>
                    </div>

                    <button  type="submit" value="send" className="btn flex" data-aos="fade-down">
                        Book NOW
                    </button>
                </form>
            </div>
        </section>)
}

export default Home
