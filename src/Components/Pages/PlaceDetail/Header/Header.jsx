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

import Data from '../../../../place-list.json'


const Header = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, []);

    const params = new URLSearchParams(useLocation().search);
    const idParam = params.get('id');

    const selectedPackage = Data.filter((item) => {
        return item.id === parseInt(idParam)
    });

    return (
    selectedPackage.map(({id, imgSrc, district, location, shortDesc}) => {
        return (
        <section className='packageDetailHeader'>
            <div className="overlay"></div>
            {/* <video src={video} muted autoPlay loop type="video/mp4"></video> */}
            <img src={imgSrc} alt={district} />
            <div className="headerContent container">
                <div className="textDiv">

                    <span data-aos="fade-up" className="smallText">
                        SRI LANKA
                    </span>

                    <h1 data-aos="fade-up" className="homeTitle">
                        {location}
                    </h1>

                    <h2 data-aos="fade-up">
                        {district}
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
        </section>)
    }))
}

export default Header;