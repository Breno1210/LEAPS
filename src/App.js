import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import LandingPage from "./Pages/LandingPage";

import AllTests from "./Pages/AllTests";
/* import Login from "./Pages/LoginPage";
import Register from "./Pages/RegisterPage";
import Description from "./Pages/DescriptionPage";
import NotFound from "./Pages/NotFoundPage";
import Contact from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import AllTests from "./Pages/AllTests";
import Thanks from "./Pages/Thanks";
 */
//Admin
/* import Admin from "./Pages/Admin/AdminPage";
import UsersAdmin from "./Pages/Admin/UsersAdminPage";
import RegisterUsersAdmin from "./Pages/Admin/RegisterUsersAdminPage";
import TestsAdmin from "./Pages/Admin/TestsAdminPage";
import RegisterTestsAdminPage from "./Pages/Admin/RegisterTestsAdminPage";
import ReportAdminPage from "./Pages/Admin/ReportAdminPage";
import EditTestsAdminPage from "./Pages/Admin/EditTestsAdminPage";
import EditUsersAdminPage from "./Pages/Admin/EditUsersAdminPage";
import LoansAdminPage from "./Pages/Admin/LoansAdminPage"; */

//Toasts
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/tests" element={<AllTests />}></Route>
          {/* <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/notfound" element={<NotFound />}></Route>
          <Route path="/description/:id" element={<Description />}></Route>
          <Route path="/tests" element={<AllTests />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/thanks" element={<Thanks />}></Route> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}
