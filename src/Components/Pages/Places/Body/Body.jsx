import React, { useEffect } from 'react'
import './body.css'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    return (
        <section className='placesBody'>
            <div className="container">
                    <h3 data-aos="fade-right" className="title">
                        So Sri Lanka
                    </h3>
                <section className="description">
                    <div data-aos="fade-right" className="imageContainer">
                        <img src='https://e0.pxfuel.com/wallpapers/817/567/desktop-wallpaper-srilanka%E2%9D%A4%EF%B8%8F-sri-lanka-nature-thumbnail.jpg' alt='So Sri Lanka'></img>
                    </div>
                    <div className="textContainer">
                        <p data-aos="fade-right" className="text">
                            Sri Lanka is a country that is filled with scenic landscapes, pristine beaches, lush tea gardens, ancient ruins, exotic wildlife, and a vibrant culture. It is a country that showcases diversity in every aspect. The country is also known for its rich heritage and history. The country is also known for its rich heritage and history. The country is also known for its rich heritage and history.
                        </p>
                    </div>  
                </section>


                {/* <div className="secTitle">
                    <h3 data-aos="fade-right" className="title">
                        Places
                    </h3>
                </div> */}

            </div>
        </section>)
}

export default Home
