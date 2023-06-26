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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, modi, rem commodi nostrum doloremque nihil quisquam maxime quibusdam laborum id maiores at a suscipit, voluptatum provident magni quis aspernatur doloribus!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia sunt numquam iure, aliquam optio rem sequi necessitatibus! Quas, architecto quibusdam nobis mollitia nam iste corporis minus explicabo voluptatem nisi nemo.
                        Lorem ipsu Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut mollitia eligendi quod iusto laudantium veniam, eaque rem quasi blanditiis, veritatis praesentium exercitationem voluptatum odio. Unde soluta iusto autem ducimus eligendi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ut, blanditiis incidunt sint neque, nam inventore minima minus, molestiae quisquam ea mollitia quasi? Debitis ipsa consequatur possimus ipsum neque quaerat.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet porro quas tempore tenetur ipsa, voluptatem, voluptatum atque aspernatur eligendi possimus vero nulla! Ullam cupiditate, nisi quaerat quod iure a perferendis?
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, modi, rem commodi nostrum doloremque nihil quisquam maxime quibusdam laborum id maiores at a suscipit, voluptatum provident magni quis aspernatur doloribus!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia sunt numquam iure, aliquam optio rem sequi necessitatibus! Quas, architecto quibusdam nobis mollitia nam iste corporis minus explicabo voluptatem nisi nemo.
                        Lorem ipsu Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut mollitia eligendi quod iusto laudantium veniam, eaque rem quasi blanditiis, veritatis praesentium exercitationem voluptatum odio. Unde soluta iusto autem ducimus eligendi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ut, blanditiis incidunt sint neque, nam inventore minima minus, molestiae quisquam ea mollitia quasi? Debitis ipsa consequatur possimus ipsum neque quaerat.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet porro quas tempore tenetur ipsa, voluptatem, voluptatum atque aspernatur eligendi possimus vero nulla! Ullam cupiditate, nisi quaerat quod iure a perferendis?
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, modi, rem commodi nostrum doloremque nihil quisquam maxime quibusdam laborum id maiores at a suscipit, voluptatum provident magni quis aspernatur doloribus!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia sunt numquam iure, aliquam optio rem sequi necessitatibus! Quas, architecto quibusdam nobis mollitia nam iste corporis minus explicabo voluptatem nisi nemo.
                        Lorem ipsu Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut mollitia eligendi quod iusto laudantium veniam, eaque rem quasi blanditiis, veritatis praesentium exercitationem voluptatum odio. Unde soluta iusto autem ducimus eligendi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ut, blanditiis incidunt sint neque, nam inventore minima minus, molestiae quisquam ea mollitia quasi? Debitis ipsa consequatur possimus ipsum neque quaerat.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet porro quas tempore tenetur ipsa, voluptatem, voluptatum atque aspernatur eligendi possimus vero nulla! Ullam cupiditate, nisi quaerat quod iure a perferendis?
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
