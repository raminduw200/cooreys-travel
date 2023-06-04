import React, {useEffect } from 'react'
import './main.css'

import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id: 1,
        imgSrc: 'https://srilankatravelgram.com/wp-content/uploads/2019/09/Nuwara-Eliya.jpg',
        destTitle: 'Nuwara Eliya',
        location: 'Sri Lanka',
        grade: 'CULURAL RELAX',
        fees: "$1000",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        id: 2,
        imgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/24/05/e0/galle-fort.jpg?w=1200&h=1200&s=1',
        destTitle: 'Galle Fort',
        location: 'Sri Lanka',
        grade: 'CULURAL RELAX',
        fees: "$1000",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        id: 1,
        imgSrc: 'https://srilankatravelgram.com/wp-content/uploads/2019/09/Nuwara-Eliya.jpg',
        destTitle: 'Nuwara Eliya',
        location: 'Sri Lanka',
        grade: 'CULURAL RELAX',
        fees: "$1000",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        id: 2,
        imgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/24/05/e0/galle-fort.jpg?w=1200&h=1200&s=1',
        destTitle: 'Galle Fort',
        location: 'Sri Lanka',
        grade: 'CULURAL RELAX',
        fees: "$1000",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        id: 1,
        imgSrc: 'https://srilankatravelgram.com/wp-content/uploads/2019/09/Nuwara-Eliya.jpg',
        destTitle: 'Nuwara Eliya',
        location: 'Sri Lanka',
        grade: 'CULURAL RELAX',
        fees: "$1000",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        id: 2,
        imgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/24/05/e0/galle-fort.jpg?w=1200&h=1200&s=1',
        destTitle: 'Galle Fort',
        location: 'Sri Lanka',
        grade: 'CULURAL RELAX',
        fees: "$1000",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
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
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, item, imgSrc, destTitle, location, grade, fees, description}) => {
                        return(
                            <div data-aos="fade-up" key={id} className='singleDestination'>
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle}/>
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon'/>
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck className='icon'/>
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