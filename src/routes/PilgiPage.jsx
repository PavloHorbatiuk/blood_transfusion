import React from 'react';

import Navbar from '../components/navbar/Navbar';
import DocInfo from '../components/docinfo/DocInfo';
import Footer from '../components/footer/Footer';
import BackCross from '../components/BackCross/BackCross';
import Pilgi from '../components/pilgi/Pilgi';
import FreAnalize from '../components/freeAnalize/FreAnalize';
import Steps from '../components/Steps/Steps';
import EasyToGIve from '../components/easyToGive/EasyToGIve';
import Hero from '../components/hero/Hero';

const PilgiPage = () => {
	return (
		<>
			<Pilgi />
			<Navbar />
			<Hero />
			<EasyToGIve />
			<Steps />
			<DocInfo />
			<FreAnalize />

			<Footer />
		</>
	);
};

export default PilgiPage;
