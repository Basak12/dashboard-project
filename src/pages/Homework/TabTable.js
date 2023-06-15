import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function TabTableForHomework({rows}) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Öğrenciler</TableCell>
                        <TableCell align="right">Öğrenci Numarası</TableCell>
                        <TableCell align="right">1. Ödev</TableCell>
                        <TableCell align="right">2. Ödev</TableCell>
                        <TableCell align="right">3. Ödev</TableCell>
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
                            <TableCell align="right">{row.firstHomework}</TableCell>
                            <TableCell align="right">{row.secondHomework}</TableCell>
                            <TableCell align="right">{row.thirdHomework}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}