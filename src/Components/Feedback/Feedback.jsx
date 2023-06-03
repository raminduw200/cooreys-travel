import React, {useEffect } from 'react'
import Rating from './Ratings/Rating'
import './feedback.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'

const Data = [
    {
        id: 1,
        dp: 'https://square-vn.com/app/dscms/assets/images/person-3.jpg',
        name: "John Doe",
        country: "America",
        rate: 4,
        date: "24/01/2023",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        id: 2,
        dp: 'https://cdn.theathletic.com/app/uploads/2020/04/13223022/HS_Square_0036_20200227Person-Joseph0616_bw.jpg',
        name: "Sara Eren",
        country: "Brazil",
        rate: 2,
        date: "12/12/2020",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
]

const Main = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])


    return (
        <section className="main container section">

            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Valuable Feedbacks
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, dp, name, rate, country, description, date}) => {
                        return(
                            <div data-aos="fade-up" key={id} className='singleFeedback'>
                                <div className="feedbackInfo">
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <div className="date">
                                        <p>{date}</p>
                                    </div>
                                </div>
                                <div className="personDetails">
                                    <img src={dp} alt={name}/>
                                    <div className="details">
                                        <h4>{name}</h4>
                                        <section className="country">
                                            <HiOutlineLocationMarker className='icon'/>
                                            <p>{country}</p>
                                        </section>
                                        <Rating rate={rate}/>
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