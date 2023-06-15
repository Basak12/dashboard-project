import Link from "./Link";
import {Box} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ClassIcon from '@mui/icons-material/Class';
import TaskIcon from '@mui/icons-material/Task';
import GradingIcon from '@mui/icons-material/Grading';
import ArticleIcon from '@mui/icons-material/Article';
import SettingsIcon from '@mui/icons-material/Settings';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import React from "react";

const Sidebar = () => {
  const links = [
    {
      label: "Dashboard",
      path: "/",
    },
    {
      label: "Sınıflar",
      path: "/classes",
    },
    {
      label: "Ödevler",
      path: "/homework",
    },
    {
      label: "Sınavlar",
      path: "/exams",
    },
    {
      label: "Notlar",
      path: "/grades",
    },
    {
      label: "Ayarlar",
      path: "/settings",
    },
  ];

  const renderedLinks = links.map((link) =>{
    return <Link key={link.label} to = {link.path} activeClassName = 'font-bold border-l-4 border-white-500 pl-2 py-3'>
      <Box style = {{
        display: 'flex',
        alignItems: 'center',
      }}>
        {link.label === 'Dashboard' ? <DashboardIcon/> : null}
        {link.label === 'Sınıflar' ? <ClassIcon/> : null}
        {link.label === 'Ödevler' ? <TaskIcon/> : null}
        {link.label === 'Sınavlar' ? <ArticleIcon/> : null}
        {link.label === 'Notlar' ? <GradingIcon/> : null}
        {link.label === 'Ayarlar' ? <SettingsIcon/> : null}
        {link.label === 'Kayıt Oluştur' ? <AppRegistrationIcon/> : null}
        {link.label}
      </Box>

    </Link>
  })

  return (
    <>
      <Box display = 'flex'flexDirection = 'column' alignItems = 'stretch' style = {{
        backgroundColor: '#11192a',
        width: '200px',
        height: '100%',
        color: 'white',
        paddingTop: '20px',
        paddingLeft: '20px',
        fontSize: '20px',
        fontWeight: 'bold',
      }}
      >
          <img src="/images/logo.png" alt="brand logo" style={{ width: "120px", height: "120px"}}/>
          {renderedLinks}
      </Box>
    </>
  );
};
export default Sidebar;
/*
 {
      label: "Kayıt Oluştur",
      path: "/register",
    },
 */

