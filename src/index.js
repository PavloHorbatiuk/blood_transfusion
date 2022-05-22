import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Routes, Route, HashRouter } from 'react-router-dom';

import DocInfoPage from './routes/PilgiPage';
import ContactPage from './routes/ContactPage';
import Pilgi from './components/pilgi/Pilgi';
import EasyToGIve from './components/easyToGive/EasyToGIve';
import QuestionsPage from './routes/QuestionsPage';
import PilgiPage from './routes/PilgiPage';

ReactDOM.render(
	<HashRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/info_donor" element={<DocInfoPage />} />
			<Route path="/pilgi" element={<PilgiPage />} />
			<Route path="/production" element={<EasyToGIve />} />
			<Route path="/contact" element={<ContactPage />} />
			<Route path="/questions" element={<QuestionsPage />} />
		</Routes>
	</HashRouter>,
	document.getElementById('root')
);
