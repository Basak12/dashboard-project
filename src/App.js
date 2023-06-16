import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import ClassesPage from "./pages/Class";
import GradesPage from "./pages/Grades/GradesPage";
import ExamsPage from "./pages/Exams/ExamsPage";
import HomeworkPage from "./pages/Homework/HomeworkPage";
import SettingsPage from "./pages/Settings/SettingsPage";
import Header from "./components/Header";
import RegisterPage from "./pages/Register/RegisterPage";
import {Box} from "@mui/material"
import UseNavigation from "./hooks/UseNavigation";
function App() {

  const { navigate, currentPath } = UseNavigation(); //reach navigate function by using useContext

  return (
      <>
        {currentPath === '/' && <Header pageName='Dashboard'/>}
        {currentPath === '/classes' && <Header pageName='Sınıflar'/>}
        {currentPath === '/grades' && <Header pageName='Notlar'/>}
        {currentPath === '/exams' && <Header pageName='Sınavlar'/>}
        {currentPath === '/homework' && <Header pageName='Ödevler'/>}
        {currentPath === '/register' && <Header pageName='Kayıt Oluştur'/>}
        {currentPath === '/settings' && <Header pageName='Ayarlar'/>}
        <Box display = 'flex' style = {{
            width: "100%",
            backgroundColor: '#eaeaeb',
            minHeight: "100vh",
        }}>
          <Box>
            <Sidebar/>
          </Box>
          <Route path="/">
            <Dashboard />
          </Route>
          <Route path="/classes">
            <ClassesPage />
          </Route>
          <Route path="/grades">
            <GradesPage />
          </Route>
          <Route path="/exams">
            <ExamsPage />
          </Route>
          <Route path="/homework">
            <HomeworkPage />
          </Route>
            <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/settings">
            <SettingsPage />
          </Route>
        </Box>

      </>




  );
}

export default App;
