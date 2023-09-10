import React from "react";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import Sidenav from "../components/Sidenav";

export default function Analytics() {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Analytics</h1>
        </Box>
      </Box>
    </>
  );
}
