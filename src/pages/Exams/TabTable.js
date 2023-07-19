import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, number, firstExamGrade, secondExamGrade, thirdExamGrade){
    return { name, number, firstExamGrade, secondExamGrade, thirdExamGrade };
}

const rows = [
    createData('Öğrenci 1', 159, 6.0, 24, 4.0),
    createData('Öğrenci 2', 237, 9.0, 37, 4.3),
    createData('Öğrenci 3', 262, 16.0, 24, 6.0),
    createData('Öğrenci 4', 305, 3.7, 67, 4.3),
    createData('Öğrenci 5', 356, 16.0, 49, 3.9),
];

export default function TabTableForExam({rows}) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Öğrenciler</TableCell>
                        <TableCell align="right">Öğrenci Numarası</TableCell>
                        <TableCell align="right">1. Sınav Notu</TableCell>
                        <TableCell align="right">2. Sınav Notu</TableCell>
                        <TableCell align="right">3. Sınav Notu</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.number}</TableCell>
                            <TableCell align="right">{row.firstExamGrade}</TableCell>
                            <TableCell align="right">{row.secondExamGrade}</TableCell>
                            <TableCell align="right">{row.thirdExamGrade}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}