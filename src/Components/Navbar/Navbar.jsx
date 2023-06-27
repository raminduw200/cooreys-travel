import React, { useState } from 'react'
import './navbar.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
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
        </section>
    )
}

export default NavBar