import React, { useEffect } from 'react'
import './header.css'
import video from '../../../../Assets/132140.mp4'

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
        packageName: 'Light Traveler',
        location: 'Sri Lanka',
        days: "6 Days",
        fees: "NEGOTIABLE",
        shortDesc: 'Sigriya, Dambulla / Matale / Kandy, Nuwaraeliya, Ella, Mirissa / Whale Watching, Colombo',
        description: `Ipsum aute dolore elit dolor anim est et eu duis ad incididunt amet adipisicing laboris. Cupidatat aliquip fugiat cillum enim commodo aliquip sit aliquip sunt proident occaecat duis enim. Laborum cillum nisi ullamco ex. Proident voluptate Lorem dolore consectetur non irure incididunt anim. Sunt excepteur in exercitation proident sint et sunt occaecat aute ipsum id aliqua laboris. Ex ex commodo eiusmod fugiat nisi sit reprehenderit voluptate non et.
            Elit sint labore id et commodo consectetur cupidatat ipsum dolor duis anim excepteur officia minim. Nostrud nostrud ut magna fugiat deserunt incididunt quis deserunt labore nostrud est consectetur reprehenderit. Ex dolore sit do qui anim. Voluptate et voluptate qui sit sit aliquip tempor enim irure.
            Sunt ex excepteur Lorem qui commodo. Esse duis tempor culpa reprehenderit ad incididunt ea labore. Incididunt ea dolor do enim ad officia enim tempor consectetur sint.`,
        routing: [
            {
                id: 1,
                name: 'Day 1',
                locations: [
                    {
                        id: 1,
                        names: [
                            'Colombo'
                        ],
                        desc: 'Arrival and Transfer to Pinnawala',
                        imgSrc: 'https://www.srilankatravelandtourism.com/wp-content/uploads/2019/07/Colombo-Sri-Lanka.jpg',
                    },
                    {
                        id: 2,
                        names: [
                            'Pinnawala', 
                            'Dambulla', 
                            'Sigiriya'
                        ],
                        desc: 'Visit Pinnawala Elephant Orphanage, Dambulla Cave Temple, Sigiriya Rock Fortress',
                        imgSrc: 'https://www.srilankatravelandtourism.com/wp-content/uploads/2019/07/Kandy-Sri-Lanka.jpg',
                    },
                    {
                        id: 3,
                        names: [
                            'Polonnaruwa',
                            'Trinco'
                        ],
                        desc: 'Visit Polonnaruwa Ancient City, Trincomalee',
                        imgSrc: 'https://www.srilankatravelandtourism.com/wp-content/uploads/2019/07/Trincomalee-Sri-Lanka.jpg',
                    },
                    {
                        id: 4,
                        names: [
                            'Leisure Day'
                        ],
                        desc: 'Leisure Day at Trincomalee',
                        imgSrc: 'https://www.srilankatravelandtourism.com/wp-content/uploads/2019/07/Trincomalee-Sri-Lanka.jpg',
                    },
                    {
                        id: 5,
                        names: [
                            'Arugambay',
                        ],
                        desc: 'Visit Arugambay Beach',
                        imgSrc: 'https://www.srilankatravelandtourism.com/wp-content/uploads/2019/07/Arugambay-Sri-Lanka.jpg',
                    },
                    {
                        id: 6,
                        names: [
                            'Leisure Day'
                        ],
                        desc: 'Leisure Day at Arugambay',
                        imgSrc: 'https://www.srilankatravelandtourism.com/wp-content/uploads/2019/07/Arugambay-Sri-Lanka.jpg',
                    },
                    {
                        id: 7,
                        names: [
                            'Kandy'
                        ],
                        desc: 'Visit Kandy Temple of Tooth Relic, Kandy City Tour',
                        imgSrc: 'https://www.srilankatravelandtourism.com/wp-content/uploads/2019/07/Kandy-Sri-Lanka.jpg',
                    },
                    {
                        id: 8,
                        names: [
                            'Nuwara Eliya'
                        ],
                        desc: 'Visit Tea Plantation, Tea Factory, Nuwara Eliya City Tour',
                        imgSrc: 'https://www.srilankatravelandtourism.com/wp-content/uploads/2019/07/Nuwara-Eliya-Sri-Lanka.jpg',
                    },
                    {
                        id: 9,
                        names: [
                            'Ella'
                        ],
                        desc: 'Train journey to Ella, Visit Nine Arch Bridge, Little Adam’s Peak',
                        imgSrc: 'https://www.srilankatravelandtourism.com/wp-content/uploads/2019/07/Ella-Sri-Lanka.jpg',
                    },
                    {
                        id: 10,
                        names: [
                            'Yala'
                        ],
                        desc: 'Visit Yala National Park',
                        imgSrc: 'https://www.srilankatravelandtourism.com/wp-content/uploads/2019/07/Yala-Sri-Lanka.jpg',
                    },
                    {
                        id: 11,
                        names: [
                            'Mirissa',
                            'Weligama'
                        ],
                        desc: 'Visit Mirissa Beach, Weligama Beach',
                        imgSrc: 'https://www.srilankatravelandtourism.com/wp-content/uploads/2019/07/Mirissa-Sri-Lanka.jpg',
                    },
                    {
                        id: 12,
                        names: [
                            'Galle',
                            'Hikkaduwa'
                        ],
                        desc: 'Visit Galle Fort, Hikkaduwa Beach',
                        imgSrc: 'https://www.srilankatravelandtourism.com/wp-content/uploads/2019/07/Galle-Sri-Lanka.jpg',
                    },
                    {
                        id: 13,
                        names: [
                            'Leisure Day',
                        ],
                        desc: 'Leisure Day at Hikkaduwa',
                        imgSrc: 'https://www.srilankatravelandtourism.com/wp-content/uploads/2019/07/Hikkaduwa-Sri-Lanka.jpg',
                    },
                    {
                        id: 14,
                        names: [
                            'Colombo'
                        ],
                        desc: 'Visit Colombo City Tour',
                        imgSrc: 'https://www.srilankatravelandtourism.com/wp-content/uploads/2019/07/Colombo-Sri-Lanka.jpg',
                    },
                    {
                        id: 15,
                        names: [
                            'Departure'
                        ],
                        desc: 'Departure',
                        imgSrc: 'https://www.srilankatravelandtourism.com/wp-content/uploads/2019/07/Colombo-Sri-Lanka.jpg',
                    },
                ]
            }
        ]
    },
]

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
    Data.map(({id, imgSrc, packageName, location, days, fees, shortDesc, description, routing}) => {
        return (
        <section className='packageDetailHeader'>
            <div className="overlay"></div>
            {/* <video src={video} muted autoPlay loop type="video/mp4"></video> */}
            <img src={imgSrc} alt={packageName} />
            <div className="headerContent container">
                <div className="textDiv">

                    <span data-aos="fade-up" className="smallText">
                        {location}
                    </span>

                    <h1 data-aos="fade-up" className="homeTitle">
                        {packageName}
                    </h1>

                    <h2 data-aos="fade-up">
                        {days}
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