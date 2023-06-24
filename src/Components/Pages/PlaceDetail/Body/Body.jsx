import React, { useEffect } from 'react'
import './body.css'

import { useLocation } from 'react-router-dom';

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
    {
        id: 1,
        imgSrc: 'https://srilankatravelgram.com/wp-content/uploads/2019/09/Nuwara-Eliya.jpg',
        location: 'Galle',
        district: 'Southern Province',
        shortDesc: 'Galle is a city on the southwest coast of Sri Lanka. It’s known for Galle Fort, the fortified old city founded by Portuguese colonists in the 16th century. Stone sea walls, expanded by the Dutch, encircle car-free streets with architecture reflecting Portuguese, Dutch and British rule. Notable buildings include the 18th-century Dutch Reformed Church. Galle Lighthouse stands on the fort’s southeast tip.',
        placesList: [
            {
                id: 1,
                imgSrc: 
                    [
                        'https://srilankatravelgram.com/wp-content/uploads/2019/09/Nuwara-Eliya.jpg',
                        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
                        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
                        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                    ],
                location: 'Karapitiya',
                desc: 'Karapitiya is a suburb of Galle, Sri Lanka. It is located on the Colombo-Galle main road, approximately 3 km north of Galle city centre. It is the site of the main teaching hospital in the Southern Province, the Karapitiya Teaching Hospital.',

            }, 
            {
                id: 2,
                imgSrc: 
                    [
                        'https://srilankatravelgram.com/wp-content/uploads/2019/09/Nuwara-Eliya.jpg',
                        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
                        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
                        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                    ],
                location: 'Karapitiya',
                desc: 'Karapitiya is a suburb of Galle, Sri Lanka. It is located on the Colombo-Galle main road, approximately 3 km north of Galle city centre. It is the site of the main teaching hospital in the Southern Province, the Karapitiya Teaching Hospital.',

            }, 
            {
                id: 3,
                imgSrc: 
                    [
                        'https://srilankatravelgram.com/wp-content/uploads/2019/09/Nuwara-Eliya.jpg',
                        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
                        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
                        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                    ],
                location: 'Karapitiya',
                desc: 'Karapitiya is a suburb of Galle, Sri Lanka. It is located on the Colombo-Galle main road, approximately 3 km north of Galle city centre. It is the site of the main teaching hospital in the Southern Province, the Karapitiya Teaching Hospital.',

            }, 
        ]
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
