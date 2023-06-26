import React, {useEffect } from 'react'
import './card.css'
import { Link } from 'react-router-dom';
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'
import Data2 from '../../../../place-list.json'



const Main = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])


    return (
        <section className="cardList container section">

            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Places
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data2.map(({id, imgSrc, location, district, shortDesc}) => {
                        return(
                            <div data-aos="fade-up" key={id} className='singleDestination'>
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={location}/>
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{location}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon'/>
                                        <span className="name">{district}</span>
                                    </span>

                                    <div className="desc">
                                        <p>{shortDesc}</p>
                                    </div>

                                    <div className="center">
                                        <button className="btn flex">
                                            <Link to={{pathname: "/place", search: "?id=" + id}}>
                                                DETAILS <HiOutlineClipboardCheck className='icon'/>
                                            </Link>
                                        </button>
                                    </div>
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