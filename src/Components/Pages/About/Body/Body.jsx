import React, { useEffect } from 'react'
import './body.css'

import { MdEmail } from 'react-icons/md'
import { IoLogoWhatsapp } from 'react-icons/io'
import { RiMoneyDollarBoxFill, RiWindyFill, RiGuideFill, RiHotelBedFill } from 'react-icons/ri'
import { MdOutlineToll } from 'react-icons/md'
import { FaTripadvisor } from 'react-icons/fa'
import { HiWifi } from 'react-icons/hi'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    return (
        <section className='aboutUsBody'>
            <div className="container">
                <div className="discription">
                    <p>
                        Welcome to <b>Cooreys Travel</b>, your premier travel agency and car rental service in Sri Lanka!

                        At Cooreys Travel, we are dedicated to providing unforgettable experiences and seamless travel solutions for our valued customers. With our extensive knowledge of Sri Lanka's enchanting landscapes, rich history, and vibrant culture, we specialize in creating personalized itineraries that cater to your unique interests and preferences.

                        Our team of experienced travel experts is committed to delivering exceptional service and ensuring every aspect of your journey is carefully planned and executed. Whether you are seeking a tranquil beach getaway, a thrilling wildlife adventure, a cultural exploration, or a combination of all three, we have the expertise to curate the perfect travel experience for you.
                    </p>
                </div>

                <div className="contactUs">
                    <div className="contactUsHeader">
                        <a href="mailto:coorey49@gmail.com" className="email">
                            <h3 data-aos="fade-right">Email Us <MdEmail /></h3>
                            <h2 data-aos="fade-right">coorey49@gmail.com</h2>
                        </a>
                        <div data-aos="fade-up" className="line"></div>
                        <a href="tel:+94712345678" className="call">
                            <h3 data-aos="fade-left">Call Us <IoLogoWhatsapp /></h3>
                            <h2 data-aos="fade-left">+94 712345678</h2>
                        </a>
                    </div>
                </div>


                <div className="discription">
                    <p>
                        As passionate ambassadors of Sri Lanka, we take pride in showcasing the hidden gems and must-see attractions of our beautiful island nation. From the misty tea plantations of Nuwara Eliya to the ancient ruins of Polonnaruwa, from the bustling streets of Colombo to the serene beaches of Mirissa, we will guide you through the best Sri Lanka has to offer.

                        In addition to our comprehensive travel services, we also provide top-quality car rental options for your convenience. Whether you prefer a comfortable sedan, a spacious SUV, or a rugged 4x4 for off-road adventures, our fleet of well-maintained vehicles caters to all your transportation needs.

                        At Cooreys Travel, we understand that each traveler is unique, and we strive to create tailor-made experiences that exceed your expectations. Our attention to detail, commitment to customer satisfaction, and deep local insights set us apart as the travel agency of choice for exploring the wonders of Sri Lanka.
                    </p>
                </div>


                <div className="deals">
                    <div className="deal" data-aos="fade-up">
                        <h3 className='icon'><RiMoneyDollarBoxFill /></h3>
                        <h3>AFFORDABLE PRICES</h3>
                    </div>
                    <div className="deal" data-aos="fade-up">
                        <h3 className='icon'><MdOutlineToll /></h3>
                        <h3>TOLL-FREE ROADS</h3>
                    </div>
                    <div className="deal" data-aos="fade-up">
                        <h3 className='icon'><RiWindyFill /></h3>
                        <h3>AIR CONDITIONED VEHICLES</h3>
                    </div>
                    <div className="deal" data-aos="fade-up">
                        <h3 className='icon'><RiGuideFill /></h3>
                        <h3>ENGLISH CHAUFFEUR</h3>
                    </div>
                    <div className="deal" data-aos="fade-up">
                        <h3 className='icon'><RiHotelBedFill /></h3>
                        <h3>STANDARD HOTELS</h3>
                    </div>
                    <div className="deal" data-aos="fade-up">
                        <h3 className='icon'><HiWifi /></h3>
                        <h3>WiFi in CAR</h3>
                    </div>
                </div>


                <div className="discription">
                    <p>
                    Embark on an unforgettable journey with Cooreys Travel and let us guide you through the rich tapestry of Sri Lanka's landscapes, heritage, and warm hospitality. Contact us today and start planning your dream vacation with the experts.
                    </p>
                </div>


                <div className="follow-us">
                    <h3 data-aos="fade-right" className="title">
                        Follow Us
                    </h3>
                    <div className="iconsTray">
                        <a href='' className="facebook" data-aos="fade-up">
                            <div className="icon">
                                <AiFillFacebook />
                            </div>
                            <p>Facebook</p>
                        </a>
                        <a className="insta" data-aos="fade-up" href=''>
                            <div className="icon">
                                <AiFillInstagram />
                            </div>
                            <p>Instagram</p>
                        </a>
                        <a className="whatsapp" data-aos="fade-up" href=''>
                            <div className="icon">
                                <IoLogoWhatsapp />
                            </div>
                            <p>WhatsApp</p>
                        </a>
                        <a className="tripadvisor" data-aos="fade-up">
                            <div className="icon">
                                <FaTripadvisor />
                            </div>
                            <p>Tripadvisor</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>)
}

export default Home
