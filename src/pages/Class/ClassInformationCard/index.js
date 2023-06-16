import React, {useState} from "react";
import {Box, Card,Button, Typography} from "@mui/material";
import ClassList from "../SingleClassPage";
import {GoChevronDown, GoChevronRight} from "react-icons/go";
const ClassInformationCard = () => {
    const [expandedIndex, setExpandedIndex] = useState(-1);
    const handleClick = (nextIndex) => {
        if(expandedIndex === nextIndex){
            setExpandedIndex(-1)
        }
        else{
            setExpandedIndex(nextIndex)
        }
    };
    const data = [
        {
            name: "9/B",
            participants: "23 Kişi",
            teacher: "Burcu Fidan",
            schedule: "Çarşamba 15:40-17:30",
            students: ["Burak Tekin", "Ceren Özçelik", "Deniz Türker"],
            studentNumbers: ["257", "323", "255", "536"],
        },
        {
            name: "10/B",
            participants: "23 Kişi",
            teacher: "Bengü Yılmaz",
            schedule: "Çarşamba 9:40-12:30",
            students: ["Başak Kocakaya", "Arda Tekin", "Atadervim Altun", "Deniz Küçükkara"],
            studentNumbers: ["237", "329", "215", "546"],
        },
        {
            name: "12/A",
            participants: "24 Kişi",
            teacher: "Melih Çelik",
            schedule: "Pazartesi 10:40-12:30",
            students: ["Baran Demirtaş", "Merve Şahin", "Beyza Güler"],
            studentNumbers: ["940", "237", "262"],

        },
        {
            name: "12/B",
            participants: "28 Kişi",
            teacher: "Duygu Sönmez",
            schedule: "Cuma 10:40-12:30",
            students: ["Ceren Özgün", "Ekin Öztürk", "Sarp Okay", "Sümeyra Ahi"],
            studentNumbers: ["547", "305", "468", "587"],
        },
        {
            name: "12/D",
            participants: "23 Kişi",
            teacher: "Burcu Fidan",
            schedule: "Salı 13:40-15:30",
            students: ["Ege Germen", "Tuna Germen", "Deniz Ender"],
            studentNumbers: ["952", "835", "345"],
        },
    ]

    const renderedItems = data.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const icon = (
            <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronRight />}
      </span>
        );

        return (
            <Box>
                <Card style={{ marginTop: "10px", marginRight: "5px",padding: "10px"}} key={item.name}>
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
                    <Button
                        onClick={() => handleClick(index)}
                        variant= {isExpanded ? "contained" : "outlined"}
                    >
                        Sınıf Listesini Görüntüle
                        {icon}
                    </Button>
                </Card>
                {isExpanded &&
                    <ClassList students= {item.students} studentNumbers={item.studentNumbers}/>
                }
            </Box>
        );
    });


    return (
       <>
           <Box>
               <Box p="20px">
                   <Typography variant = "h5">Sınıf Bilgileri</Typography>
                   <Box display = "flex">
                       {renderedItems}
                   </Box>
               </Box>
           </Box>
       </>
    );
};

export default ClassInformationCard;
