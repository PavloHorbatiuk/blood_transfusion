import React from 'react';
import './EasyToGive.css';
import easySvg from './../../assets/veryeasy.svg';

import { Link } from 'react-router-dom';

const EasyToGIve = () => {
	return (
		<div className="production">
			<div className="container">
				<div className="content">
					<div>
						<img className="topIllustration" src={easySvg} alt="easy" />
					</div>
					<div>
						<span className="yelow-span">Стати донором сууупер просто!</span>
					</div>
					<div>
						<h1 className="t1">Записуйся на донацію онлайн</h1>
					</div>
					<div>
						<Link className="linkToContact" to="contact">
							Записатися зараз
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EasyToGIve;
