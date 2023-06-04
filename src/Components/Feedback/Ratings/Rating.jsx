import React, {useEffect } from 'react'
import './rating.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

import {AiFillStar, AiOutlineStar} from 'react-icons/ai'


const Rating = ({rate}) => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    
    const ratedIcons = []
    
    for (let i = 1; i <= 5; i++) {
        if (i <= rate) ratedIcons.push(<AiFillStar className='icon'/>)
        else ratedIcons.push(<AiOutlineStar className='icon'/>)
    }
        
    return (
        <section className="starTray">
            {ratedIcons}
        </section>
    )
}

export default Rating
