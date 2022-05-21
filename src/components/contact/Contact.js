import React from 'react'
import './ContactStyles.css'
import {useFormik} from 'formik';
import {TextField} from "@mui/material";
import close from './../../assets/close32.png'
import {useNavigate} from "react-router-dom";


const regEx = /^(?:\+38)?(0(67|68|96|97|98)\d{7})$/
    && /^\+?3?8?(0(66|95|99)\d{7})$/
    && /^\+?3?8?(0[679]3\d{7})$/
    && /^\+?3?8?(0[5-9][0-9]\d{7})$/
    && /^\+?3?8?(0[3-6][1-8]\d{7})$/
    && /^\+?3?8?(0\d{9})$/

const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Обов\'язкове поле';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Повинно бути не більше 15 символів';
    } else if (values.firstName.length < 4) {
        errors.firstName = "Мінімальна кількість символів 4"
    }
    if (!values.lastName) {
        errors.lastName = 'Обов\'язкове поле';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Повинно бути не більше 15 символів';
    } else if (values.lastName.length < 4) {
        errors.lastName = 'Мінімальна кількість символів 4'
    }

    if (!values.phoneNumber) {
        debugger
        errors.phoneNumber = 'Обов\'язкове поле';
    } else if (!regEx.test(values.phoneNumber)) {
        debugger
        errors.phoneNumber = 'Невірно вказаний номер';
        debugger
    }

    return errors;
};
const Contact = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phoneNumber: "+380",
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    const clickHandler = () => navigate('/')
    return (
        <div className='contact'>
            <div className="container">
                <div>
                    <img onClick={clickHandler} className='iconArray' src={close} alt='close'/>
                </div>
                <div className="form-container">
                    <div className="stepTitle">Надайте контактні дані</div>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            sx={{margin: "20px"}}
                            variant='standard'
                            label="Ваше ім'я"
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />
                        {formik.touched.firstName && formik.errors.firstName ?
                            <div className='error'>{formik.errors.firstName}</div> : null}
                        <TextField
                            sx={{margin: "20px"}}
                            variant='standard'
                            label="Ваше прізвіще"
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                        />
                        {formik.touched.lastName && formik.errors.lastName ?
                            <div className='error'>{formik.errors.lastName}</div> : null}
                        <TextField
                            sx={{margin: "20px"}}
                            variant='standard'
                            label="Ваш номер телефону"
                            id="phoneNumber"
                            name="phoneNumber"
                            type="tel" pattern={regEx} required
                            onChange={formik.handleChange}
                            value={formik.values.phoneNumber}
                        />
                        {formik.touched.phoneNumber && formik.errors.phoneNumber ?
                            <div className='error'>{formik.errors.phoneNumber}</div> : null}
                        <div className='btnSubmit'>
                            <button className='btn-col' type="submit">< span className="btnTitle">Відправити</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
