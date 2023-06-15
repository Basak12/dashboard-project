import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Typography, Card} from "@mui/material";
import TabTableForExam from "./TabTable";
import Accordion from "../../components/Accordion";
import MultiBarChartForExam from "./BaseMultiBarChart";

const TabsForClass = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function createData(name, number, firstExamGrade, secondExamGrade, thirdExamGrade){
        return { name, number, firstExamGrade, secondExamGrade, thirdExamGrade };
    }
    const rows = [
        createData('Baran Demirtaş', 940, 59, 24, 70),
        createData('Başak Kocakaya', 237, 100, 70, 98),
        createData('Beyza Güler', 262, 60, 42, 60),
        createData('Ekin Öztürk', 305, 73, 67, 43),
        createData('Nehir Ada Öztürk', 356, 57, 49, 39),
    ];
    const items = [
        {
            id: 1,
            label: "9/A Sınav Notları",
            content: <TabTableForExam rows={rows}/>,
        },
        {
            id: 2,
            label: "9/B Sınav Notları",
            content: <TabTableForExam rows={rows}/>,
        },
        {
            id: 3,
            label: "9/C Sınav Notları",
            content: <TabTableForExam rows={rows}/>,
        },
    ];

    const renderTable = () => {
        switch (value) {
            case 0:
                return (<Box>
                    <Card style = {{
                        marginBottom: "10px",
                    }}>
                        <MultiBarChartForExam/>
                    </Card>
                   <Card>
                       <Accordion items={items}/>
                   </Card>
                </Box>);
            case 1:
                return <TabTableForExam rows={rows}/>;
            case 2:
                return <TabTableForExam rows={rows}/>;
            case 3:
                return <TabTableForExam rows={rows}/>;
            default:
                return null;
        }
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: "column" , margin: "20px"}}>
            <Box alignItems= "center">
                    <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                        <Tab label="9. Sınıflar" />
                        <Tab label="10. Sınıflar" />
                        <Tab label="11. Snıflar" />
                        <Tab label="12. Sınıflar" />
                    </Tabs>
            </Box>
            <Box style = {{margin:"20px"}}>
                {renderTable()}
            </Box>
        </Box>
    );
};

export default TabsForClass;