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


const Data = [
    {
        id: 1,
        imgSrc: 'https://srilankatravelgram.com/wp-content/uploads/2019/09/Nuwara-Eliya.jpg',
        location: 'Galle',
        district: 'Southern Province',
        shortDesc: 'Galle is a city on the southwest coast of Sri Lanka. It’s known for Galle Fort, the fortified old city founded by Portuguese colonists in the 16th century. Stone sea walls, expanded by the Dutch, encircle car-free streets with architecture reflecting Portuguese, Dutch and British rule. Notable buildings include the 18th-century Dutch Reformed Church. Galle Lighthouse stands on the fort’s southeast tip.',
    },
    {
        id: 2,
        imgSrc: 'https://media.istockphoto.com/id/1285881901/photo/temple-of-the-sacred-tooth-relic-at-kandy-sri-lanka.jpg?s=612x612&w=0&k=20&c=gqnoXgatwo1Ar_oCYnGnmE3Ts7sn9DvYKPK0n6Mhca8=',
        location: 'Kandy',
        district: 'Central Province',
        shortDesc: 'Kandy is a large city in central Sri Lanka. It\'s set on a plateau surrounded by mountains, which are home to tea plantations and biodiverse rainforest. The city\'s heart is scenic Kandy Lake (Bogambara Lake), which is popular for strolling. Kandy is famed for sacred Buddhist sites, including the Temple of the Tooth (Sri Dalada Maligawa) shrine, celebrated with the grand Esala Perahera annual procession.',
    },
    {
        id: 3,
        imgSrc: 'https://srilankatravelgram.com/wp-content/uploads/2019/09/Nuwara-Eliya.jpg',
        location: 'Nuwara Eliya',
        district: 'Central Province',
        shortDesc: 'Galle is a city on the southwest coast of Sri Lanka. It’s known for Galle Fort, the fortified old city founded by Portuguese colonists in the 16th century. Stone sea walls, expanded by the Dutch, encircle car-free streets with architecture reflecting Portuguese, Dutch and British rule. Notable buildings include the 18th-century Dutch Reformed Church. Galle Lighthouse stands on the fort’s southeast tip.',
    },
]

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    const params = new URLSearchParams(useLocation().search);
    const idParam = params.get('id');

    const selectedPackage = Data.filter((item) => {
        return item.id === parseInt(idParam)
    })

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

export default Home