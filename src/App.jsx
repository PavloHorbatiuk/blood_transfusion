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
import {useSelector} from "react-redux";
import Loader from "./components/loader-status/Loader";
import AdminPage from "./components/adminPage/AdminPage";
import SuccessPage from "./components/SuccessPage/SuccessPage";


function App() {
    const statusLodaer = useSelector(state => state.features.status)


    return (
        <>
            {statusLodaer === "loading" && <Loader/>}
            <Navbar/>
            <Hero/>
            <EasyToGIve/>
            <Steps/>
            <DocInfo/>
            <FreAnalize/>
            <Pilgi/>
            <DataContacts/>
            <AdminPage/>
            <Footer/>
        </>
    );
}

export default App;
