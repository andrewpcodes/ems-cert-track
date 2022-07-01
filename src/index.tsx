import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import UserChecklist from "./pages/checklist/Checklist";
import Registration from "./pages/registration/Registration";
import Homepage from "./pages/hompage/Homepage";
import Recertification from "./pages/rectification-info/Rectification";
import Login from "./pages/login/Login";
import Courses from "./pages/courses/Courses";
import Header from "./components/header/Header";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Homepage />} />
        <Route path="checklist" element={<UserChecklist />} />
        <Route path="register" element={<Registration />} />
        <Route path="recertification" element={<Recertification />} />
        <Route path="login" element={<Login />} />
        <Route path="courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
);
