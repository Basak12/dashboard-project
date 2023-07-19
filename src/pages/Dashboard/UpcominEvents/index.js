import React, {useState} from "react";
import {Box, Typography, Card, Avatar, FormGroup, FormControlLabel, Checkbox, Button, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
const UpcomingEvents = ({events, updateEvents}) => {
    const handleCheckboxChange = async (event, eventId) => {
        const updatedEvents = events.map((event) => {
            if (event.id === eventId) {
                return { ...event, status: !event.status };
            }
            return event;
        });

        try {
            await updateEventStatusInDatabase(eventId, !event.status);
            updateEvents(updatedEvents);
        } catch (error) {
            console.log(error.message);
        }
    };

    const deleteEventFromDatabase = async (eventId) => {
        try {
            const response = await fetch(
                `https://reat-http-post-default-rtdb.firebaseio.com/activities/${eventId}.json`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
        } catch (error) {
            throw new Error('Something went wrong!');
        }
    };

    const handleRemoveEvent = async (eventId) => {
            await deleteEventFromDatabase(eventId);
        const updatedEvents = events.filter((event) => event.id !== eventId);
        updateEvents(updatedEvents);
    };


    const updateEventStatusInDatabase = async (eventId, status) => {
        try {
            const response = await fetch(
                `https://reat-http-post-default-rtdb.firebaseio.com/activities/${eventId}.json`,
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ status }),
                }
            );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
        } catch (error) {
            throw new Error('Something went wrong!');
        }
    };


    return(
        <>
                <Box px="10px" py = "20px">
                        <Typography variant = "h5">Yaklaşan Hatırlatmalar</Typography>
                    <Box display = "flex" flexWrap = "wrap">
                        {events.map((event) => (
                            <Card style={{ marginTop: "10px", marginRight: "5px",padding: "10px"}} key={event.id}>
                                <Box display = 'flex' justifyContent = 'space-between' alignItems = 'center'>
                                 <Typography
                                     variant="caption"
                                 >
                                     Bilişim Teknolojileri
                                 </Typography>
                                    <IconButton size="small" onClick={() => handleRemoveEvent(event.id)}>
                                        <CloseIcon/>
                                    </IconButton>
                                </Box>
                                <Typography variant="h6">
                                    {event.activity}
                                </Typography>
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                    <Box  display="flex"
                                          flexDirection="row">
                                        <Typography
                                            variant="subtitle1"
                                        >
                                            Kalan Zaman:
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            style={{marginLeft: "5px"}}
                                            color = {event.deadline === 1 ? "red" : "green"}
                                        >
                                            <span>{event.deadline} gün </span>
                                        </Typography>
                                    </Box>
                                    <FormGroup sx={{p:1}}>
                                        <FormControlLabel
                                            key={event.id}
                                            control={<Checkbox checked={event.status}  onChange={(e) => handleCheckboxChange(e, event.id)}/>}
                                            label="Tamamlandı"
                                        />
                                    </FormGroup>
                                </Box>
                            </Card>
                        ))}
                    </Box>
                </Box>
        </>
    )
}

export default UpcomingEvents;