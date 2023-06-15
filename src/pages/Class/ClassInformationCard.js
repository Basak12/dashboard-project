import React from "react";
import {Box, Card,Button, Typography} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const ClassInformationCard = () => {
    const data = [
        {
            name: "12/A",
            participants: "24 Kişi",
            teacher: "Melih Çelik",
            schedule: "Pazartesi 10:40-12:30",
        },
        {
            name: "12/B",
            participants: "28 Kişi",
            teacher: "Duygu Sönmez",
            schedule: "Cuma 10:40-12:30",
        },
        {
            name: "12/C",
            participants: "23 Kişi",
            teacher: "Burcu Fidan",
            schedule: "Salı 13:40-15:30",
        },
        {
            name: "12/D",
            participants: "23 Kişi",
            teacher: "Burcu Fidan",
            schedule: "Salı 13:40-15:30",
        }]

    return (
       <>
           <Box>
               <Box p="20px">
                   <Typography variant = "h5">Sınıf Bilgileri</Typography>
                   <Box display = "flex">
                       {data.map((item) => (
                           <Card style={{ marginTop: "10px", marginRight: "5px",padding: "10px"}} key={item.event}>
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
                                           {item.name}
                                       </Typography>
                                   </Box>
                               </Box>
                               <Box display="flex" alignItems="center" justifyContent="space-between">
                                   <Box  display="flex"
                                         flexDirection="row">
                                       <Typography
                                           variant="subtitle1"
                                           style = {{
                                               color: "#0000008a"
                                           }}
                                       >
                                           Sınıf Mevcudu:
                                       </Typography>
                                       <Typography
                                           variant="subtitle1"
                                           style={{marginLeft: "5px"}}
                                       >
                                           <span>{item.participants}</span>
                                       </Typography>
                                   </Box>
                               </Box>
                               <Box display="flex" alignItems="center" justifyContent="space-between">
                                   <Box  display="flex"
                                         flexDirection="row">
                                       <Typography
                                           variant="subtitle1"
                                           style = {{
                                               color: "#0000008a"
                                           }}
                                       >
                                           Sorumlu Öğretmen:
                                       </Typography>
                                       <Typography
                                           variant="subtitle1"
                                           style={{marginLeft: "5px"}}
                                       >
                                           <span>{item.teacher}</span>
                                       </Typography>
                                   </Box>
                               </Box>
                               <Box display="flex" alignItems="center" justifyContent="space-between" marginBottom = "10px">
                                   <Box  display="flex"
                                         flexDirection="row">
                                       <Typography
                                           variant="subtitle1"
                                           style = {{
                                               color: "#0000008a"
                                           }}
                                       >
                                           Ders Programı:
                                       </Typography>
                                       <Typography
                                           variant="subtitle1"
                                           style={{marginLeft: "5px"}}
                                       >
                                           <span>{item.schedule}</span>
                                       </Typography>
                                   </Box>
                               </Box>
                               <Button variant="outlined" size = "small" endIcon={<NavigateNextIcon />}>
                                   Sınıfı Görüntüle
                               </Button>
                           </Card>
                       ))}
                   </Box>
               </Box>
           </Box>
       </>
    );
};

export default ClassInformationCard;
