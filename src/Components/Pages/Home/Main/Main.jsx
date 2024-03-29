import React, {useEffect } from 'react'
import './main.css'
import { Link } from 'react-router-dom';
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data2 = [
    {
        id: 1,
        imgSrc: 'https://srilankatravelgram.com/wp-content/uploads/2019/09/Nuwara-Eliya.jpg',
        packageName: 'Light Traveler',
        location: 'Sri Lanka',
        days: "6 Days",
        fees: "NEGOTIABLE",
        shortDesc: 'Sigriya, Dambulla / Matale / Kandy, Nuwaraeliya, Ella, Mirissa / Whale Watching, Colombo'
    },
    {
        id: 2,
        imgSrc: 'https://srilankatravelgram.com/wp-content/uploads/2019/09/Nuwara-Eliya.jpg',
        packageName: 'Explorer',
        location: 'Sri Lanka',
        days: "10 Days",
        fees: "NEGOTIABLE",
        shortDesc: 'Negambo, Anuradhapura / Dambulla, Sigiriya, Matale / Kandy, Nuwaraeliya / Horton Plains, Ella, Udawalawa / Mirissa, Whale Watching / Galle'
    },
    {
        id: 3,
        imgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/24/05/e0/galle-fort.jpg?w=1200&h=1200&s=1',
        packageName: 'Extreme Traveler',
        location: 'Sri Lanka',
        days: "15 Days",
        fees: "NEGOTIABLE",
        shortDesc: 'Pinnawala / Dambulla / Sigiriya, Polonnaruwa / Trincamalee, Arugambay, Kandy, Nuwaraeliya, Ella, Yala National Park, Weligama / Mirissa, Galle / Hikkaduwa, Colombo'
    },
]
const Data = [
    {
        id: 1,
        imgSrc: 'https://srilankatravelgram.com/wp-content/uploads/2019/09/Nuwara-Eliya.jpg',
        destTitle: 'Nuwara Eliya',
        location: 'Sri Lanka',
        grade: 'CULURAL RELAX',
        fees: "$1000",
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        id: 2,
        imgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/24/05/e0/galle-fort.jpg?w=1200&h=1200&s=1',
        destTitle: 'Galle Fort',
        location: 'Sri Lanka',
        grade: 'CULURAL RELAX',
        fees: "$1000",
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        id: 1,
        imgSrc: 'https://srilankatravelgram.com/wp-content/uploads/2019/09/Nuwara-Eliya.jpg',
        destTitle: 'Nuwara Eliya',
        location: 'Sri Lanka',
        grade: 'CULURAL RELAX',
        fees: "$1000",
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        id: 2,
        imgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/24/05/e0/galle-fort.jpg?w=1200&h=1200&s=1',
        destTitle: 'Galle Fort',
        location: 'Sri Lanka',
        grade: 'CULURAL RELAX',
        fees: "$1000",
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        id: 1,
        imgSrc: 'https://srilankatravelgram.com/wp-content/uploads/2019/09/Nuwara-Eliya.jpg',
        destTitle: 'Nuwara Eliya',
        location: 'Sri Lanka',
        grade: 'CULURAL RELAX',
        fees: "$1000",
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        id: 2,
        imgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/24/05/e0/galle-fort.jpg?w=1200&h=1200&s=1',
        destTitle: 'Galle Fort',
        location: 'Sri Lanka',
        grade: 'CULURAL RELAX',
        fees: "$1000",
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
]

const Main = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])


    return (
        <section className="main container section">

            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Our Packages
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data2.map(({id, imgSrc, packageName, location, days, fees, shortDesc}) => {
                    // Data.map(({id, imgSrc, destTitle, location, grade, fees, shortDesc}) => {
                        return(
                            <div data-aos="fade-up" key={id} className='singleDestination'>
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={packageName}/>
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{packageName}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon'/>
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>PRICE: {fees}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{days}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{shortDesc}</p>
                                    </div>

                                    <button className="btn flex">
                                        <Link to={{pathname: "/package_detail", search: "?id=" + id}}>
                                            DETAILS <HiOutlineClipboardCheck className='icon'/>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main