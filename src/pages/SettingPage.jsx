import React from "react";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import List from "./TabSetting/List";

export default function SettingPage() {
  return (
    <>
    <div className="bgcolor">
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          
          <List />
        </Box>
      </Box>
      </div>
    </>
  );
}
