import React, {useState} from "react";
import { TextField, Button, Card, Box, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';


const CreateEvent = () => {
    const [event, setEvent] = useState('');
    const [deadline, setDeadline] = useState(0);
    const [open, setOpen] = useState(false);

    const handleSubmit = () => {
        console.log(`String Input: ${event}`);
        console.log(`Number Input: ${deadline}`);
    };


    return(
            <>
                <Card sx = {{p:'15px' }}>
                    <Box display='flex' flexDirection='column'>
                        <TextField
                            sx = {{py:'15px' }}
                            id="string-input"
                            label="Açıklama Giriniz"
                            value={event}
                            onChange={(e) => setEvent(e.target.value)}
                        />
                        <TextField
                            sx = {{py:'15px' }}
                            id="int-input"
                            label="Deadline Giriniz"
                            type="number"
                            value={deadline}
                            onChange={(e) => setDeadline(parseInt(e.target.value))}
                        />
                        <Button sx = {{py:'15px' }}
                            variant="outlined" color="primary" onClick={() => setOpen(true)}>
                            Hatırlatıcıyı Kaydet
                        </Button>
                        <Dialog open={open} onClose={() => setOpen(false)}>
                            <DialogTitle>Hatırlatıcı Kaydedildi</DialogTitle>
                            <DialogActions>
                                <Button onClick={() => setOpen(false)} color="success">
                                    Kapat
                                </Button>
                            </DialogActions>
                        </Dialog>

                    </Box>


                </Card>

            </>
        )
}
export default CreateEvent;