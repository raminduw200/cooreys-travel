import React, { useEffect } from 'react'
import './header.css'
import { useLocation } from 'react-router-dom';

import { FiFacebook } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { SiTripadvisor } from 'react-icons/si'
import { BsListTask } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])


    return (
        <section className='packageDetailHeader'>
            <div className="overlay"></div>
            {/* <video src={video} muted autoPlay loop type="video/mp4"></video> */}
            <img src="https://srilankatravelgram.com/wp-content/uploads/2019/09/Nuwara-Eliya.jpg" alt='booknow' />
            <div className="headerContent container">
                <div className="textDiv">

                    <span data-aos="fade-up" className="smallText">
                        Discover Sri Lanka's Hidden Treasures
                    </span>

                    <h1 data-aos="fade-up" className="homeTitle">
                        Book Your Adventure
                    </h1>

                    <h2 data-aos="fade-up">
                        Today!
                    </h2>
                </div>

                <div  data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className='icon'/>
                        <AiOutlineInstagram className='icon'/>
                        <SiTripadvisor className='icon'/>
                    </div>

                    <div className="leftIcons">
                        <BsListTask className='icon'/>
                        <TbApps className='icon'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home