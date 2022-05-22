import React from 'react';
import cross from './../../assets/close32.png';
import './BackCrossStyle.css';
import { useNavigate, Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const BackCross = () => {
	const navigate = useNavigate();

	return (
		<div className="topHd">
			<Link className="backBtn" to="/">
				<BiArrowBack className='arrowBack' />
				Головна
			</Link>
		</div>
	);
};

export default BackCross;
