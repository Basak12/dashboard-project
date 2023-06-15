import React from "react";
import Box from "@mui/material/Box";
import TabsForClassSection from "./TabsForExamSection";

const ExamsPage = () => {

    return(
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
                <TabsForClassSection />
            </Box>
        </>
    )
}

export default ExamsPage;