import React from 'react';
import './SuccessPageStyle.css'
import BackCross from "../BackCross/BackCross";
import image from './../../assets/kapelnica.svg'


function SuccessPage() {

    return (
        <div className='success'>
            <div className="container">
                <div className="content">
                    <h2 className='title'>Дякуємо що подали заявку</h2>
                    <h3>в найближчий час з вами звяжеться спеціаліст для призначення  пожертви і уточнення інформації</h3>
                    <BackCross/>
                    <img className='image imgSuccess' src={image}/>
                </div>
            </div>
        </div>
    );
}

export default SuccessPage;