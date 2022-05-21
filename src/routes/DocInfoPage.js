import React from 'react'

import Navbar from '../components/navbar/Navbar'
import DocInfo from '../components/docinfo/DocInfo'
import Footer from '../components/footer/Footer'
import BackCross from "../components/BackCross/BackCross";

const DocInfoPage = () => {
    return (
        <>
            <BackCross/>
            <DocInfo/>
            <Footer/>
        </>
    )
}

export default DocInfoPage
