import React from 'react'
import './HeroStyles.css'
import {Typography} from "@mui/material";
import Box from '@mui/material/Box';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="content">
                    <Box>
                    <Typography variant='h5' color='white' textAlign='center'>КОМУНАЛЬНЕ ПІДПРИЄМСТВО</Typography>
                    <Typography variant='h5' color='white' textAlign='center'> "РІВНЕНСЬКИЙ ОБЛАСНИЙ ЦЕНТР СЛУЖБИ КРОВІ"</Typography>
                    <Typography  variant='h5' color='white' textAlign='center'> РІВНЕНСЬКОЇ ОБЛАСНОЇ РАДИ</Typography>
                    <div className='btn'>
                        <button>Запис</button>
                    </div>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Hero
