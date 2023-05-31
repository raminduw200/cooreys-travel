import React from 'react'
import './home.css'
import video from '../../Assets/132140.mp4'
import { GrLocation, } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { SiTripadvisor } from 'react-icons/si'
import { BsListTask } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb'

const Home = () => {
    return (
        <section className='home'>
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">

                    <span className="smallText">
                        Our Packages
                    </span>

                    <h1 className="homeTitle">
                        Search your Holiday
                    </h1>

                </div>

                <div className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search your destination:</label>
                        <div className="input flex">
                            <input type="text" placeholder='Enter name here...'/>
                            <GrLocation className='icon'/>
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Select your date:</label>
                        <div className="input flex">
                            <input type="date"/>
                        </div>
                    </div>
                    
                    <div className="priceInput">
                        <label htmlFor="city">Price range (USD):</label>
                        <div className="input flex">
                            <input type="range" min='0' max='1000' step='10'/>
                        </div>
                    </div>

                    <div className="searchOptions flex">
                        <HiFilter className='icon'/>
                        <span>MORE FILTERS</span>
                    </div>
                </div>

                <div className="homeFooterIcons flex">
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