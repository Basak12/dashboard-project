import React, {useState} from "react";
import {Box, Card} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CreateEvent from "./CreateEvent";

const RegisterDropDown = () => {
    const [event, setEvent] = useState('');

    const handleChange = (event) => {
        setEvent(event.target.value);
    };

    return(
        <>
            <Box sx = {{m: '20px'}} display = 'flex' flexDirection='column'>
                <Box sx={{ width: '450px'}}>
                    <Card sx = {{p:'15px' }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Etkinlik Seçiniz</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={event}
                                onChange={handleChange}
                                label='Etkinlik Seçiniz'
                            >
                                <MenuItem value='Sınav Notu'>Sınav Notu</MenuItem>
                                <MenuItem value='Ödev Durumu'>Ödev Durumu</MenuItem>
                                <MenuItem value='Hatırlatıcı'>Hatırlatıcı</MenuItem>
                            </Select>
                        </FormControl>
                    </Card>
                </Box>
            <Box sx = {{py:'15px' }}>
                {event === 'Hatırlatıcı' ? <CreateEvent/> : null}
            </Box>
            </Box>
        </>
    )

}
export default RegisterDropDown;