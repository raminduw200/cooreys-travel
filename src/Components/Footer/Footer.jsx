import React from 'react'
import './footer.css'
import video from '../../Assets/waterfall.mp4'

import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
import { SiTripadvisor } from 'react-icons/si'
import { AiFillHeart } from 'react-icons/ai'

const Footer = () => {
    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input type="text" placeholder='Enter Email Address' />
                        <button className="btn flex" type='submit'>
                            SEND <FiSend className="icon" />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <MdOutlineTravelExplore className="icon" /> Travel.
                            </a>
                        </div>

                        <div className="footerParagraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam beatae quos alias fuga vitae sequi. Ratione, voluptatem omnis iusto hic molestiae esse perferendis delectus quaerat debitis dolor! Harum, sequi!
                        </div>

                        <div className="footerSocials flex">
                            <AiOutlineTwitter className="icon" />
                            <AiFillYoutube className="icon" />
                            <AiFillInstagram className="icon" />
                            <SiTripadvisor className="icon" />
                        </div>
                    </div>

                    <div className="footerLinks grid">
                        {/* Our Agency */}
                        <div className="linkGroup">
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
                        <div className="linkGroup">
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
                        <div className="linkGroup">
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