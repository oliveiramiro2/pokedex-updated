import React from "react";
import { Routes, Route } from "react-router";
import HomePublic from "../../Pages/public/Home";

const PublicRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<HomePublic />} />
    </Routes>
);

export default PublicRoutes;
