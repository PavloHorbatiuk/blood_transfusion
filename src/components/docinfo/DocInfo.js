import React from 'react'
import './DocInfoStyles.css'
import ok from './../../assets/ok.svg'
import doc from './../../assets/docs.png'

const DocInfo = () => {
    return (
        <div className='LandDocInfo'>
            <div className="container">
                <div className="content">
                    <div className='wrapper'>
                        <h5 className="title_check"><span className='GreenSpan'>Впевнись,</span></h5>
                        <h5 className="title_check"> що можеш бути донором плазми</h5>
                        <div className="ItemsWrp">
                            <div className='blockWraper'>
                                <div className='age'>
                                    <span className='s1'>18</span>
                                    <span className='s2'>років</span>
                                </div>
                                <span className='caption'>Вік не менше 18 років</span>
                            </div>
                            <div className='blockWraper'>
                                <div className='age'>
                                    <span className='s1'>50+</span>
                                    <span className='s2'>кг</span>
                                </div>
                                <span className='caption'>Вага більше 50 кг</span>
                            </div>
                            <div className='blockWraper'>
                                <div className='age'>
                                    <img src={ok} alt='ok'/>
                                </div>
                                <span className='caption'>Загальний стан здоров’я відмінний</span>
                            </div>
                        </div>
                    </div>
                    <div className='block_documents'>
                        <h5 className="title_check">Візьми з собою оригінали документів</h5>
                        <div className='twoCol'>
                            <div className='list'>
                                <p className='boldList'>1. Паспорт (або ID-картка) </p>
                                <p className='boldList'>2. Ідентифікаційний код (ІПН) </p>
                                <p>Посвідка на постійне проживання на
                                    без громадянства</p>
                            </div>
                            <div className='image_block'>
                                <img className='pasportImage' src={doc}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DocInfo
