import React, {useState} from "react";
import {Box, Typography, Card, Avatar, FormGroup, FormControlLabel, Checkbox, Button} from "@mui/material";
import AddNewActivity from "../AddNewActivity";

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
    const updateEventStatusInDatabase = async (eventId, status) => {
        try {
            const response = await fetch(
                `https://reat-http-post-default-rtdb.firebaseio.com/movies/${eventId}.json`,
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
                <Box p="20px">
                        <Typography variant = "h5">Yaklaşan Aktivite</Typography>
                    <Box display = "flex" flexWrap = "wrap">
                        {events.map((event) => (
                            <Card style={{ marginTop: "10px", marginRight: "5px",padding: "10px"}} key={event.id}>
                                <Box
                                    pb={2}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Box>
                                        <Typography
                                            gutterBottom
                                            component="div"
                                            variant="caption"
                                        >
                                            Bilişim Teknolojileri
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                        >
                                            {event.openingText}
                                        </Typography>
                                    </Box>
                                </Box>
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
                                            color = {event.releaseDate === 1 ? "red" : "green"}
                                        >
                                            <span>{event.releaseDate} gün </span>
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