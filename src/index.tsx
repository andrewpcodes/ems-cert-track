
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/hompage/Homepage";
import UserChecklist from "./pages/checklist/Checklist";
import Registration from "./pages/registration/Registration";
import Recertification from "./pages/recertification-info/Recertification";
import Login from "./pages/login/Login";
import Courses from "./pages/courses/Courses";
import About from './pages/footer-links/about/About';
import ContactUs from "./pages/footer-links/contactus/ContactUs";
import Help from "./pages/footer-links/help/Help";
import Footer from './components/footer/Footer';

Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route index element={<Homepage />} />
        <Route path="checklist" element={<UserChecklist />} />
        <Route path="register" element={<Registration />} />
        <Route path="recertification" element={<Recertification />} />
        <Route path="login" element={<Login />} />
        <Route path="courses" element={<Courses />} />
        <Route path="about" element={<About />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="help" element={<Help />} />
      </Routes>
      <Footer />
    </BrowserRouter>
);
