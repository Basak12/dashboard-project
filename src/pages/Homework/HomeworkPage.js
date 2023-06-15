import React from "react";
import TabsForHomework from "./TabsForHomeworkSection";
import {Box} from "@mui/material";

const HomeworkPage = () => {

    return(
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
                <TabsForHomework/>
            </Box>
        </>

    )
}

export default HomeworkPage;