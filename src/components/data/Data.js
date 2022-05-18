import React from 'react'
import './DataStyles.css'
import step1 from './../../assets/step1.svg'
import step2 from './../../assets/step2.svg'
import step3 from './../../assets/step3.svg'
import step4 from './../../assets/step4.svg'


const Data = () => {
    return (
        <div className='data'>
            <div className="container">
                <h1>4 кроки донора в центрі <span>служби крові</span></h1>
                <div className="content">

                    <div className='step_one'>
                        <img src={step1} alt='step1'/>
                        <p>1</p>
                        <span>Запишись онлайн</span>
                        <p className='txt'>
                            Не витрачай час на очікування в плазмацентрі, онлайн-запис на донацію триває
                            всього три хвилини! Введи свої контактні дані, обери плазмацентр та вкажи бажані дату й час
                            візиту
                        </p>
                    </div>
                    <div>
                        <img src={step2} alt='step2'/>
                        <p>2.</p>
                        <span>Пройди скрінінг</span>
                        <p className='txt'>
                            Щоб ти отримав максимум користі, перед донацією ми перевіримо твій стан здоров’я:
                            безкоштовно проведемо біохімічний аналіз крові та зробимо терапевтичний огляд
                        </p>
                    </div>
                    <div>
                        <img src={step3} alt='step3'/>
                        <span>3.</span>
                        <p>Здай плазму</p>
                        <p className='txt'>
                            Загалом, на кріслі донора ти проведеш приблизно 45 хвилин. За цей час твоя плазма буде
                            відібрана із загальної маси крові, а червоні й білі тільця повернуті назад
                        </p>
                    </div>
                    <div>
                        <img src={step3} alt='step3'/>
                        <span>4.</span>
                        <p>Отримай винагороду</p>
                        <p className='txt'>
                            Будь-яка добра справа має бути віддячена. Наші донори отримують щедрі компенсації за кожну
                            донацію плазми
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Data
