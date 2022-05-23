import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './NavbarStyles.css';
import image from './../../assets/lable.png';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => setNav(!nav);

	return (
		<div name="top" className="navbar">
			<div className="container">
				<div className="logo">
					<img src={image} alt="logo" />
				</div>
				<ul className={nav ? 'nav-menu active' : 'nav-menu'}>
					<li>
						<LinkRouter className="active-class" to="/info_donor">
							Інформація донору
						</LinkRouter>
					</li>
					<li>
						<LinkRouter className="active-class" to="/contacts">
							Контакти
						</LinkRouter>
					</li>
					<li>
						<ScrollLink
							activeClass="active"
							to="pilgi"
							spy={true}
							smooth={true}
							delay={0.5}
							duration={1200}
							className="active-class"
						>
							Пільги донорам
						</ScrollLink>
					</li>
					<li>
						<LinkRouter className="active-class" to="/questions">
							Часті запитання
						</LinkRouter>
					</li>
				</ul>
				<div className="hamburger" onClick={handleNav}>
					{!nav ? <FaBars className="icon" /> : <FaTimes className="icon" />}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
