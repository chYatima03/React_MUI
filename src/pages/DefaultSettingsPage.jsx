import React from "react";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import DefaultSettingsList from "./TabDefaultSetting/DefaultSettingsList";
// import List from "./TabSetting/List";

export default function DefaultSettingsPage() {
  return (
    <>
    <div className="bgcolor">
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          
          <DefaultSettingsList />
        </Box>
      </Box>
      </div>
    </>
  );
}
