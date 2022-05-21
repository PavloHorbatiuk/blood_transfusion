import React from 'react'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import './FooterStyles.css'
import logo from './../../assets/lable.png'
import { Link } from 'react-scroll'


const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <Link activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='icon' />
                    </Link>
                </div>
                <div className="col-container">
                    <div className="logo-footer"> <img src={logo}/></div>
                    <div className="logo-footer">
                        <span>© 2012-2022</span> <span className='copyright'>.КОМУНАЛЬНЕ ПІДПРИЄМСТВО "РІВНЕНСЬКИЙ ОБЛАСНИЙ ЦЕНТР СЛУЖБИ КРОВІ" РІВНЕНСЬКОЇ ОБЛАСНОЇ РАДИ. Всі права захищені.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
