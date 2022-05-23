import React from 'react';
import Steps from './components/Steps/Steps';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import DocInfo from './components/docinfo/DocInfo';
import Footer from './components/footer/Footer';
import Pilgi from './components/pilgi/Pilgi';
import EasyToGIve from './components/easyToGive/EasyToGIve';
import FreAnalize from './components/freeAnalize/FreAnalize';
import DataContacts from './components/dataContacts/DataContacts';

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<EasyToGIve />
			<Steps />
			<DocInfo />
			<FreAnalize />
			<Pilgi />
			<DataContacts />
			<Footer />
		</>
	);
}

export default App;
