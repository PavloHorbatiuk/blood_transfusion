import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Routes, Route, HashRouter } from 'react-router-dom';

import QuestionsPage from './routes/QuestionsPage';
import WrongPage from './components/404-error/WrongPage';
import DataContacts from "./components/dataContacts/DataContacts";

ReactDOM.render(
	<HashRouter>
		<Routes>
			<Route index element={<App />} />
			<Route path="/" element={<App />} />
			<Route path="/*" element={<WrongPage />} />
			<Route path="questions" element={<QuestionsPage />} />
			<Route path="contacts" element={<DataContacts />} />
		</Routes>
	</HashRouter>,
	document.getElementById('root')
);
