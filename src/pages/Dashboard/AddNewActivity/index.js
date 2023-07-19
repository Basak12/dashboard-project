import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';


const AddNewActivity = ({onAddNewActivity}) => {
    const [open, setOpen] = useState(false);
    const [activity, setActivity] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function submitHandler() {
        const newEvent = {
            activity: activity,
            deadline: deadline,
            status: false,
        };
        onAddNewActivity(newEvent);
        setActivity('');
        setDeadline('');
        setOpen(false);
    }


    return (
        <div style={{paddingLeft: '10px'}}>
            <Button variant="contained" color="primary" onClick={handleOpen} endIcon = {<ControlPointIcon/>}>
                Yeni Aktivite Ekle
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Yeni Aktivite Oluştur</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Aktivite"
                        value={activity}
                        onChange={(e) => setActivity(e.target.value)}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Harcanacak Gün Sayısı"
                        value={deadline}
                        type= "number"
                        onChange={(e) => setDeadline(e.target.value)}
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
