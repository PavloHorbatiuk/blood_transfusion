import React from 'react'
import './DataStyles.css'
import step1 from './../../assets/step1.svg'
import step2 from './../../assets/step2.svg'
import step3 from './../../assets/step3.svg'
import step4 from './../../assets/step4.svg'
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Data = () => {
    return (
        <div className='data'>
            <div className="container">
                <h1 className='title'>4 кроки донора в центрі <span>служби крові</span></h1>
                <div className='row_content'>
                    <div className='row_step'>
                        <img className='image' src={step1} alt='step1'/>
                        <p>1</p>
                       <h4> <span>Запишись онлайн</span></h4>
                        <p className='txt'>
                            Не витрачай час на очікування в плазмацентрі, онлайн-запис на донацію триває
                            всього три хвилини! Введи свої контактні дані, обери плазмацентр та вкажи бажані
                            дату й час
                            візиту
                        </p>
                    </div>
                    <div className='row_step'>
                        <img className='image' src={step2} alt='step2'/>
                        <p>1</p>
                       <h4><span>Пройди скрінінг</span></h4>
                        <p className='txt'>
                            Не витрачай час на очікування в плазмацентрі, онлайн-запис на донацію триває
                            всього три хвилини! Введи свої контактні дані, обери плазмацентр та вкажи бажані
                            дату й час
                            візиту
                        </p>
                    </div>
                    <div className='row_step'>
                        <img className='image' src={step3} alt='step3'/>
                        <p>3.</p>
                        <h4><span>Здай плазму</span></h4>
                        <p className='txt'>
                            Загалом, на кріслі донора ти проведеш приблизно 45 хвилин. За цей час твоя плазма
                            буде
                            відібрана із загальної маси крові, а червоні й білі тільця повернуті назад
                        </p>
                    </div >
                    <div className='row_step'>
                        <img className='image' src={step4} alt='step4'/>
                        <p>4.</p>
                        <h4><span>Отримай винагороду</span></h4>
                        <p className='txt'>
                            Будь-яка добра справа має бути віддячена. Наші донори отримують щедрі компенсації за
                            кожну донацію плазми
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Data

// <Box sx={{flexGrow: 1}}>
// <Grid container
// direction="row"
// justifyContent="center"
// alignItems="center" spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
// <Grid item xs={3} >
//     <Item>
/*   <img src={step1} alt='step1'/>
   <p>1</p>
<span>Запишись онлайн</span>
<p className='txt'>
   Не витрачай час на очікування в плазмацентрі, онлайн-запис на донацію триває
   всього три хвилини! Введи свої контактні дані, обери плазмацентр та вкажи бажані
   дату й час
   візиту
</p>*/
// </Item>
// </Grid>
// <Grid item xs={3}>
//     <Item>

//     </Item>
// </Grid>
// <Grid item xs={3}>
//     <Item>

//     </Item>
// </Grid>
// <Grid item xs={3}>
//     <Item>

//     </Item>
// </Grid>
// </Grid>
// </Box>