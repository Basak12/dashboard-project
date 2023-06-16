import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Typography, Card} from "@mui/material";
import TabTableForHomework from "./TabTable";
import Accordion from "../../components/Accordion";
import BaseMultiBarChart from "./BaseMultiBarChart";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const TabsForHomework = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function createData(name, number, firstHomework, secondHomework, thirdHomework){
        return { name, number, firstHomework, secondHomework, thirdHomework };
    }
    const rows = [
        createData('Baran Demirtaş', 940, <CheckIcon color = 'success'/>, <CheckIcon color = 'success'/>, <CheckIcon color = 'success'/>),
        createData('Başak Kocakaya', 237, <CheckIcon color = 'success'/>, <CloseIcon color = 'error'/>, <CloseIcon color = 'error'/>),
        createData('Beyza Güler', 262, <CheckIcon color = 'success'/>, <CheckIcon color = 'success'/>, <CheckIcon color = 'success'/>),
        createData('Ekin Öztürk', 305, <CheckIcon color = 'success'/>, <CloseIcon color = 'error'/>, <CloseIcon color = 'error'/>),
        createData('Nehir Ada Öztürk', 356, <CheckIcon color = 'success'/>, <CheckIcon color = 'success'/>, <CheckIcon color = 'success'/>),
    ];
    const items = [
        {
            id: 1,
            label: "9/B Ödev Durumu",
            content: <TabTableForHomework rows={rows}/>,
        },
    ];

    const renderTable = () => {
        switch (value) {
            case 0:
                return (<Box>
                    <Card style = {{
                        marginBottom: "10px",
                    }}>
                        <BaseMultiBarChart/>
                    </Card>
                   <Card>
                       <Accordion items={items}/>
                   </Card>
                </Box>);
            case 1:
                return <TabTableForHomework rows={rows}/>;
            case 2:
                return <TabTableForHomework rows={rows}/>;
            case 3:
                return <TabTableForHomework rows={rows}/>;
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

export default TabsForHomework;
