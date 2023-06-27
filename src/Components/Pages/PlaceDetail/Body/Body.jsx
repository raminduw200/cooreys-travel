import React, { useEffect } from 'react'
import './body.css'

import { useLocation } from 'react-router-dom';

import Aos from 'aos'
import 'aos/dist/aos.css'

import Data from '../../../../places.json'




const Home = () => {
    const params = new URLSearchParams(useLocation().search);
    const idParam = params.get('id');

    const selectedPlace = Data.filter((item) => {
        return item.id === parseInt(idParam)
    })

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    return (
        <section className='placeDetailBody'>
            <div className="container">
            {selectedPlace && selectedPlace[0].placesList.map(({ id, imgSrc, location, desc }) => {
                        return (
                            <section>
                                <div className="secTitle">
                                    <h3 data-aos="fade-right" className="title">
                                        {location}
                                    </h3>
                                </div>
                                <div className="row" data-aos="fade-top">
                                    <div className="imageContainer">
                                        <img src={imgSrc[0]} alt={location}></img>
                                    </div>
                                    <div className="textContainer">
                                        {desc}
                                    </div>
                                </div>
                            </section>
                        )
                        })}
            </div>
        </section>)
}

export default Home
