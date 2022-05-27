import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Routes, Route, HashRouter} from 'react-router-dom';

import QuestionsPage from './routes/QuestionsPage';
import WrongPage from './components/404-error/WrongPage';
import DataContacts from "./components/dataContacts/DataContacts";
import Contact from "./components/contact/Contact";
import Contraindication from "./components/contraindication/Сontraindication";
import {Provider} from "react-redux";
import {store} from "./store/state";
import SuccessPage from "./components/SuccessPage/SuccessPage";


ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Routes>
                <Route index element={<App/>}/>
                <Route path="/" element={<App/>}/>
                <Route path="/*" element={<WrongPage/>}/>
                <Route path="questions" element={<QuestionsPage/>}/>
                <Route path="contacts" element={<DataContacts/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="contraindication" element={<Contraindication/>}/>
                <Route path="success_registration" element={<SuccessPage/>}/>
            </Routes>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
