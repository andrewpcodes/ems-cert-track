import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import UserChecklist from "./pages/checklist/Checklist";
import Registration from "./pages/registration/Registration";
import Homepage from "./pages/hompage/Homepage";
import Recertification from "./pages/rectification-info/Rectification";
import Login from "./pages/login/Login";
import Courses from "./pages/courses/Courses";
import Profile from "./pages/Profile/Profile";
import Admin from "./pages/admin/Admin";
import BostonEMSMap from "./pages/courses/Maps/BostonEMS";
import BostonUniversityMap from "./pages/courses/Maps/BostonUniversity";
import EMSAcademyMap from "./pages/courses/Maps/EMSAcademy";
import { override } from "./override";
import { ThemeProvider } from '@mui/system';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={override}>
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Homepage />} />
        <Route path="checklist" element={<UserChecklist />} />
        <Route path="register" element={<Registration />} />
        <Route path="recertification" element={<Recertification />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="admin" element={<Admin />} />
        <Route path="courses" element={<Courses />} />
        <Route path="boston-ems" element={<BostonEMSMap />} />
        <Route path="boston-university" element={<BostonUniversityMap />} />
        <Route path="ems-academy" element={<EMSAcademyMap />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
