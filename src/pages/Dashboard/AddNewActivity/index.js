import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';


const AddNewActivity = ({onAddNewActivity}) => {
    const [open, setOpen] = useState(false);
    const [openingText, setOpeningText] = useState('');
    const [releaseDate, setReleaseDate] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function submitHandler() {
        const newEvent = {
            openingText: openingText,
            releaseDate: releaseDate,
            status: false,
        };
        onAddNewActivity(newEvent);
        setOpeningText('');
        setReleaseDate('');
        setOpen(false);
    }


    return (
        <div style={{paddingLeft: '20px'}}>
            <Button variant="contained" color="primary" onClick={handleOpen} endIcon = {<ControlPointIcon/>}>
                Yeni Aktivite Ekle
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Yeni Aktivite Oluştur</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Aktivite"
                        value={openingText}
                        onChange={(e) => setOpeningText(e.target.value)}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Harcanacak Gün Sayısı"
                        value={releaseDate}
                        type= "number"
                        onChange={(e) => setReleaseDate(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="error" variant = 'outlined'>
                        Vazgeç
                    </Button>
                    <Button onClick={submitHandler} color="success" variant = 'outlined'>
                        Aktiviteyi Kaydet
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddNewActivity;
