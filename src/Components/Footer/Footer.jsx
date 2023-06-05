import React, { useEffect } from 'react'
import './footer.css'
import video from '../../Assets/waterfall.mp4'

import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
import { SiTripadvisor } from 'react-icons/si'
import { AiFillHeart } from 'react-icons/ai'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
    
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
                        <button data-aos="fade-up" className="btn flex" type='submit'>
                            SEND <FiSend className="icon" />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <MdOutlineTravelExplore className="icon" /> Coorey's Travel
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam beatae quos alias fuga vitae sequi. Ratione, voluptatem omnis iusto hic molestiae esse perferendis delectus quaerat debitis dolor! Harum, sequi!
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <AiOutlineTwitter className="icon" />
                            <AiFillYoutube className="icon" />
                            <AiFillInstagram className="icon" />
                            <SiTripadvisor className="icon" />
                        </div>
                    </div>

                    <div data-aos="fade-up" className="footerLinks grid">
                        {/* Our Agency */}
                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> Agency
                            </li>
                            
                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> Tourism
                            </li>
                            
                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> Payment
                            </li>
                        </div>
                        {/* Partners */}
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> Bookings
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> Rentcars
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> HostelWorld
                            </li>
                            
                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> Trivago
                            </li>
                            
                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> TripAdvisor
                            </li>
                        </div>
                        {/* Last minute */}
                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> Kandy
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> Colombo
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> Galle
                            </li>
                            
                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> Badulla
                            </li>
                            
                            <li className="footerList flex">
                                <FiChevronRight className="icon" /> Jaffna
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>DESIGNED WITH <AiFillHeart /> BY MALINDU</small>
                        <small>COPYRIGHTS RESERVED - COOREY'S TRAVEL</small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer