import React, {useEffect } from 'react'
import './card.css'
import { Link } from 'react-router-dom';
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data2 = [
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

                                    {/* <button className="btn flex">
                                        <Link to={{pathname: "/package_detail", search: "?id=" + id}}>
                                            DETAILS <HiOutlineClipboardCheck className='icon'/>
                                        </Link>
                                    </button> */}
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