import React from 'react'
import './ContactStyles.css'
import {useFormik} from 'formik';
import {TextField} from "@mui/material";
import close from './../../assets/close32.png'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createDonorsTH} from "../../store/Donor-reducer";
import SuccessPage from "../SuccessPage/SuccessPage";


const regEx = /^(?:\+38)?(0(67|68|96|97|98)\d{7})$/
    && /^\+?3?8?(0(66|95|99)\d{7})$/
    && /^\+?3?8?(0[679]3\d{7})$/
    && /^\+?3?8?(0[5-9][0-9]\d{7})$/
    && /^\+?3?8?(0[3-6][1-8]\d{7})$/
    && /^\+?3?8?(0\d{9})$/

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Обов\'язкове поле';
    } else if (values.name.length > 15) {
        errors.name = 'Повинно бути не більше 15 символів';
    } else if (values.name.length < 4) {
        errors.name = "Мінімальна кількість символів 4"
    }
    if (!values.second_name) {
        errors.second_name = 'Обов\'язкове поле';
    } else if (values.second_name.length > 20) {
        errors.second_name = 'Повинно бути не більше 15 символів';
    } else if (values.second_name.length < 4) {
        errors.second_name = 'Мінімальна кількість символів 4'
    }

    if (!values.phone_number) {
        errors.phone_number = 'Обов\'язкове поле';
    } else if (!regEx.test(values.phone_number)) {
        errors.phone_number = 'Невірно вказаний номер';
    }

    return errors;
};
const Contact = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isDonor = useSelector(state => state.donors.isDonor)
    const formik = useFormik({
        initialValues: {
            name: '',
            second_name: '',
            phone_number: "+380",
        },
        validate,
        onSubmit: values => {
            dispatch(createDonorsTH(JSON.stringify(values)))
        }

    });

    if (isDonor) {
        return <SuccessPage/>
    }
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
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        {formik.touched.name && formik.errors.name ?
                            <div className='error'>{formik.errors.name}</div> : null}
                        <TextField
                            sx={{margin: "20px"}}
                            variant='standard'
                            label="Ваше прізвіще"
                            id="second_name"
                            name="second_name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.second_name}
                        />
                        {formik.touched.second_name && formik.errors.second_name ?
                            <div className='error'>{formik.errors.second_name}</div> : null}
                        <TextField
                            sx={{margin: "20px"}}
                            variant='standard'
                            label="Ваш номер телефону"
                            id="phone_number"
                            name="phone_number"
                            type="tel" pattern={regEx} required
                            onChange={formik.handleChange}
                            value={formik.values.phone_number}
                        />
                        {formik.touched.phone_number && formik.errors.phone_number ?
                            <div className='error'>{formik.errors.phone_number}</div> : null}
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
