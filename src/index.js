import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Routes, Route, HashRouter} from 'react-router-dom'

import DocInfoPage from './routes/DocInfoPage'
import ContactPage from './routes/ContactPage'
import Pilgi from "./components/pilgi/Pilgi";
import EasyToGIve from "./components/easyToGive/EasyToGIve";


ReactDOM.render(
    <HashRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/info_donor' element={<DocInfoPage/>}/>
            <Route path='/pilgi' element={<Pilgi/>}/>
            <Route path='/production' element={<EasyToGIve/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
    </HashRouter>,
    document.getElementById('root')
);

