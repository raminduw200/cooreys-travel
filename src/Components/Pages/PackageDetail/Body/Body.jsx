import React, { useEffect } from 'react'
import './body.css'

import { MdModeOfTravel, MdOutlineCardTravel } from 'react-icons/md'
import { useLocation } from 'react-router-dom';

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
        packageIncludes: [
            "Welcome assistance on the arrival at the Airport",
            "Transport exclusively by air-conditioned vehicles with English Speaking chauffeur",
            "Standard hotels with breakfast",
            "All transfers according to programme including airport transfers",
            "WiFi and water bottles in the vehicle",
            "All prevailing taxes on transport",
        ],
        routing: [
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
    },
    {
        id: 2,
        imgSrc: 'https://srilankatravelgram.com/wp-content/uploads/2019/09/Nuwara-Eliya.jpg',
        packageName: 'Explorer',
        location: 'Sri Lanka',
        days: "10 Days",
        fees: "NEGOTIABLE",
        shortDesc: 'Negambo, Anuradhapura / Dambulla, Sigiriya, Matale / Kandy, Nuwaraeliya / Horton Plains, Ella, Udawalawa / Mirissa, Whale Watching / Galle',
        packageIncludes: [
            "Welcome assistance on the arrival at the Airport",
            "Transport exclusively by air-conditioned vehicles with English Speaking chauffeur",
            "Standard hotels with breakfast",
            "All transfers according to programme including airport transfers",
            "WiFi and water bottles in the vehicle",
            "All prevailing taxes on transport",
        ],
        routing: [
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
    },
    {
        id: 3,
        imgSrc: 'https://srilankatravelgram.com/wp-content/uploads/2019/09/Nuwara-Eliya.jpg',
        packageName: 'Extreme Traveler',
        location: 'Sri Lanka',
        days: "15 Days",
        fees: "NEGOTIABLE",
        shortDesc: 'Pinnawala / Dambulla / Sigiriya, Polonnaruwa / Trincamalee, Arugambay, Kandy, Nuwaraeliya, Ella, Yala National Park, Weligama / Mirissa, Galle / Hikkaduwa, Colombo',
        packageIncludes: [
            "Welcome assistance on the arrival at the Airport",
            "Transport exclusively by air-conditioned vehicles with English Speaking chauffeur",
            "Standard hotels with breakfast",
            "All transfers according to programme including airport transfers",
            "WiFi and water bottles in the vehicle",
            "All prevailing taxes on transport",
        ],
        routing: [
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
    },
]

const Home = () => {
    const params = new URLSearchParams(useLocation().search);
    const idParam = params.get('id');

    const selectedPackage = Data.filter((item) => {
        return item.id === parseInt(idParam)
    })

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    return (
        selectedPackage.map(({id, packageIncludes, routing}) => {
        return (
        <section className='body'>
            <div className="container">
                <div className="packageIncludes">
                    <div data-aos="fade-up" className="packageIncludesTitle">
                        <MdOutlineCardTravel className='icon'/> Package Includes
                    </div>
                    <ul className='packageIncludeDesc'>
                    {packageIncludes.map((item, index) => {
                        return (<li key={index} data-aos="fade-up">{item}</li>)
                    })}
                    </ul>
                </div>
                <div className="destinationRouting">
                    <div data-aos="fade-right" className="destinationRoutingTitle">
                        <MdModeOfTravel className='icon'/> Daily Routing
                    </div>
                    <div className="dailyRouting">
                        {routing.map(({id, names, desc}) => {
                            const namesArr = []

                            for (let i = 0; i < names.length; i++) {
                                if (i !== names.length - 1) {
                                    namesArr.push(<span className='dailyRoutingItemName'>{names[i]} <small>OR</small> </span>)
                                } else {
                                    namesArr.push(<span className='dailyRoutingItemName'>{names[i]}</span>)
                                }
                            }
                            return (
                                <div data-aos="fade-right" className="dailyRoutingItem" key={id}>
                                    <div className="dailyRoutingItemNames">
                                        {namesArr}
                                    </div>
                                    <span className='dailyRoutingItemDesc'>{desc}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </section>)
})
)
}

export default Home
