import React from "react";
import {Box, Card,Button, Typography} from "@mui/material";

const ClassList = ({students, studentNumbers}) => {
    return(
        <>
        <Card style = {{
            marginTop: "10px",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
        }}>
            <Box diplay= "flex" flexDirection = "row" justifyContent = "space-betwen">
                <Typography
                    variant="subtitle1"
                    style = {{
                        color: "#0000008a"
                    }}
                >
                    Öğrenciler
                </Typography>
                <Typography
                    display ="flex"
                    flexDirection = "column"
                    variant="subtitle1"
                >
                    {students.map((student, index) => {
                        return(
                            <span key={index}>{index + 1}) {student} </span>
                        )},)}
                </Typography>
            </Box>
            <Box display = "flex" flexDirection = "column" alignItems = "center">
                <Typography
                    variant="subtitle1"
                    style = {{
                        color: "#0000008a"
                    }}
                >
                    Öğrenci Numarası
                </Typography>
                <Typography
                    display ="flex"
                    flexDirection = "column"
                    variant="subtitle1"
                >
                    {studentNumbers.map((number, index) => {
                        return(
                            <span key={index}>{number}</span>
                        )},)}
                </Typography>
            </Box>
        </Card>
            </>
    )
};

export default ClassList;