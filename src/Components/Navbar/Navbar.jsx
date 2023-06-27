import React, { useState } from 'react'
import './navbar.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import { BsTelephoneFill } from "react-icons/bs";
import { Outlet, Link } from 'react-router-dom';

const NavBar = () => {
    const [active, setActive] = useState('navBar')
    // function to toggle the navbar
    const showNav = () => {
        setActive('navBar activeNavbar')
    }
    
    // function to close the navbar
    const removeNavbar = () => {
        setActive('navBar')
    }

    return (
        <section className='navBarSection'>
            <header className='header flex'>

                <div className='logoDiv'>
                    <Link to='/' className='logo flex'>
                        <h1><MdOutlineTravelExplore className="icon"/> Coorey's Travel</h1>
                    </Link>
                </div>

                <div className={active}>
                    <ul className='navLists grid'>
                        <li className='navItem'>
                            <Link to='/' className='navLink'>Home</Link>
                        </li>
                       
                        <li className='navItem'>
                            <Link to='/about' className='navLink'>About</Link>
                        </li>
                        <li className='navItem'>
                            <Link to='/places' className='navLink'>Places</Link>
                        </li>
                        

                        <button className='btn'>
                            <Link to="/book_now">BOOK NOW</Link>
                        </button>
                    </ul>

                    <div onClick={removeNavbar} className="closeNavbar">
                        <AiFillCloseCircle className="icon"/>
                    </div>
                </div>


                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon"/>
                </div>
            </header> 
        
            <div className="quickContact">
                <a href="tel:+94740255541" class="floating-button">
                    <BsTelephoneFill />
                </a>

                <a href="https://wa.me/94740255541/?text=Hello%20Coorey's%20Travel%20%21%21%0AName%3A%0AI%20would%20like%20to%20know%20more%20information%20about" class="floating-button whatsapp">
                    <RiWhatsappFill />
                </a>
            </div>

        </section>
    )
}

export default NavBar