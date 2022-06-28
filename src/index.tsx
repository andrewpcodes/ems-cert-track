import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Checklist from "./pages/checklist/Checklist";
import Registration from "./pages/registration/Registration";
import Homepage from "./pages/hompage/Homepage";
import Rectification from "./pages/rectification-info/Rectification";
import Login from "./pages/login/Login";
import Courses from "./pages/courses/Courses";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Homepage />} />
        <Route path="checklist" element={<Checklist />} />
        <Route path="register" element={<Registration />} />
        <Route path="rectification" element={<Rectification />} />
        <Route path="login" element={<Login />} />
        <Route path="courses" element={<Courses />} />
      </Routes>
      </BrowserRouter>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
