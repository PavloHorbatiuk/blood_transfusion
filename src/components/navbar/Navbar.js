import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './NavbarStyles.css'
import image from './../../assets/lable.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


    return (
        <div name='top' className='navbar'>
            <div className="container">
                <div className="logo">
                    <img  src={image} alt='logo'/>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Інформація донору</Link></li>
                    <li><Link to='/recovery'>Платні послуги</Link></li>
                    <li><Link to='/cloud'>Діяльність</Link></li>
                    <li><Link to='/contact'>Пільги донорам</Link></li>
                    <li><Link to='/links'>Корисні посилання</Link></li>
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon'/>) : (<FaTimes className='icon'/>)}
                </div>
            </div>
        </div>
    )
}

export default Navbar
