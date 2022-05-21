import React from 'react'
import cross from './../../assets/close32.png'
import './BackCrossStyle.css'
import {useNavigate} from "react-router-dom";

const BackCross = () => {
const navigate = useNavigate()

    return (
        <div className='backCross'>
            <img onClick={()=>navigate('/')}  className='backsvg' src={cross}/>
        </div>
    )
}

export default BackCross
