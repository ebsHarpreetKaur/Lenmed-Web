import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from './Dashboard';
import Hospital from "./Hospital";
import ManageHospital from "../Admin/ManageHospital";
import ManageNurses from "../Admin/ManageNurses";
import ManageDoctors from "../Admin/ManageDoctors";


const Routing = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/hospital" element={<Hospital />} />
                <Route path="/managehospital/:id" element={<ManageHospital />} />
                <Route path="/managehospital/:id/managenurses" element={<ManageNurses />} />
                <Route path="/managehospital/:id/managedoctors" element={<ManageDoctors />} />

            </Routes>
        </>
    );
};

export default Routing;
