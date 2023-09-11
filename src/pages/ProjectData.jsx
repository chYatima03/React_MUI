import React from "react";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import ProjectDataList from "./TabProjectData/ProjectDataList";
import { Outlet } from "react-router-dom";

export default function ProjectData() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <ProjectDataList />
            {/* <Outlet /> */}
          </Box>
        </Box>
      </div>
    </>
  );
}
