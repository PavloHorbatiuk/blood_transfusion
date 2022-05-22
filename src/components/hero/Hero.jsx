import React from 'react'
import './HeroStyles.css'
import Box from '@mui/material/Box';
import {useNavigate} from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    const clickHandler = () => navigate('/contact')
    return (
        <div className='hero'>
            <div className="container">
                <div className="content">
                    <Box>
                        <h5 className='text-title'>КОМУНАЛЬНЕ ПІДПРИЄМСТВО</h5>
                        <h5 className='text-title'> "РІВНЕНСЬКИЙ ОБЛАСНИЙ ЦЕНТР СЛУЖБИ
                            КРОВІ"</h5>
                        <h5 className='text-title'> РІВНЕНСЬКОЇ ОБЛАСНОЇ
                            РАДИ</h5>
                        <div className='btn'>
                            <button onClick={clickHandler}>Зареєструватися</button>
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Hero
