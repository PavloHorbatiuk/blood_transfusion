import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import './СontraindicationStyle.css'
import BackCross from "../BackCross/BackCross";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(number, code, name, size, time, price) {
    return {number, code, name, size, time, price};
}

const rows = [
    createData('1', 10, "Індивідуальний підбір та сумісність донорської крові на площині (Кумбса) (венозна кров)", 1, 60, 130),
    createData('2', 20, "Rh-типування на площині (венозна кров)", 1, 10, 95),
    createData('3', 30, "Визначення антиеритроцитарних антитіл методом конглютинації з 10 % желатином (венозна кров).", 1, 60, 130),
    createData('4', 40, "Клінічний аналіз крові на автоматичному аналізаторі з ручним підрахунком лейкоцитарної формули та ШОЕ (Капілярна кров)", 1, 60, 170),
    createData('5', 60, "Загальний аналіз крові на автоматичному аналізаторі (венозна кров)", 1, 15, 145),
    createData('6', 70, "Експрес визначення групи крові за системою АВ0 та КИ (капілярна кров).", 1, 10, 65),
    createData('7', 50, "Експрес визначення концентрації гемоглобіну та гематокриту (капілярна кров)", 1, 10, 45),
];

export default function Contraindication() {


    return (
        <div className="contraindication">

            <div className="container">
                <div className='two-col-arrow'>
                    <div className=" cross">
                    <BackCross/>
                    </div>
                    <h2 className='title'>Платні послуги</h2>
                </div>
                <div className="content">

                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 700}} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>№ п/п</StyledTableCell>
                                    <StyledTableCell align="right">Код послуги</StyledTableCell>
                                    <StyledTableCell align="right">Найменування послуги

                                    </StyledTableCell>
                                    <StyledTableCell align="right">Кіль-кість</StyledTableCell>
                                    <StyledTableCell align="right">Час вико-нання, хв</StyledTableCell>
                                    <StyledTableCell align="right">Вартість послуги, грн.</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell align="right">{row.number}</StyledTableCell>
                                        <StyledTableCell align="right">{row.code}</StyledTableCell>
                                        <StyledTableCell align="right">{row.name}</StyledTableCell>
                                        <StyledTableCell align="right">{row.size}</StyledTableCell>
                                        <StyledTableCell align="right">{row.time}</StyledTableCell>
                                        <StyledTableCell align="right">{row.price}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    );
}
