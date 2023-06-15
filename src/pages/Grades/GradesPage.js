import React from "react";
import TabsForGradesSection from "./TabsForGradesSection";
import {Box} from "@mui/material";

const GradesPage = () => {

    return(
        <>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
            <TabsForGradesSection/>
        </Box>
        </>
    )

}

export default GradesPage;