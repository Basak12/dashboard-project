import React, {useState, useEffect} from "react";
import {Box, Typography, Card, Avatar, FormGroup, FormControlLabel, Checkbox} from "@mui/material";
import UpcomingEvents from "./UpcominEvents";
import SuccessRatePieChart from "./SuccessRatePieChart";
import AddNewActivity from "./AddNewActivity";
const Dashboard = () => {
    const [events, setEvents] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const updateEvents = (updatedEvents) => {
        setEvents(updatedEvents);
    };

    async function fetchEventsHandler(){
        try {
            const response = await fetch(
                "https://reat-http-post-default-rtdb.firebaseio.com/movies.json"
            );
            const data = await response.json();
            const loadedEvents = [];
            for (const key in data) {
                loadedEvents.push({
                    id: key,
                    status: data[key].status,
                    openingText: data[key].openingText,
                    releaseDate: data[key].releaseDate,
                });
            }
            setEvents(loadedEvents);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchEventsHandler();
    }, []);

    async function addEventHandler(newEvent) {
        const response = await fetch(
            "https://reat-http-post-default-rtdb.firebaseio.com/movies.json",
            {
                method: "POST",
                body: JSON.stringify(newEvent),
            }
        );
        fetchEventsHandler();
    }

  return(
    <>
        <Box display = "flex" flexDirection="column">
                <UpcomingEvents events={events} updateEvents={updateEvents} />
                <AddNewActivity open = {open} setOpen = {setOpen} onAddNewActivity={addEventHandler}/>
            <SuccessRatePieChart/>
        </Box>

      </>
  )
}

export default Dashboard;