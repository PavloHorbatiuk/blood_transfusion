import React from 'react'
import "./FreeAnalizStyle.css"
import lens from './../../assets/lens.svg'
import marker from './../../assets/desis.svg'

const FreAnalize = () => {

    return (
        <div className='freeAnalize'>
            <div className="container">
                <h2>Переваги для донорів</h2>
                <div className="content">
                    <div className='twoCol'>
                            <ol>
                                <li>Безкоштовний скринінг</li>
                                <p className='txt'>ПЛР на наявність збудників:</p>
                                <div className='itemWraper'>
                                    <div className='item'>
                                        <img src={marker} alt='deasis'/> Віл
                                    </div>
                                    <div className='item'>
                                        <img src={marker} alt='deasis'/> гепатит В
                                    </div>
                                    <div className='item'>
                                        <img src={marker} alt='deasis'/> гепатит C
                                    </div>
                                </div>
                                <li>Клінічний аналіз крові</li>
                                <p className='txt'>За запитом донора ми безплатно оформимо та надамо офіційні результати
                                    тестування, які можна використати для візиту до лікаря, на роботі, чи ВУЗ
                                </p>
                                <li>Безкоштовна консультація від лікаря-терапевта</li>
                            </ol>
                        <div>
                            <img className="lens" src={lens} alt='lens'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreAnalize
