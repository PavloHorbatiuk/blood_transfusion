import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import DocInfoPage from './routes/DocInfoPage'
import ContactPage from './routes/ContactPage'
import InfoDonors from "./components/info-for-donors/InfoDonors";
import DocInfo from "./components/docinfo/DocInfo";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/info_donor' element={<DocInfoPage/>}/>
            <Route path='/cloud' element={<DocInfoPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);

