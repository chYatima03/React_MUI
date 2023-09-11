import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import ProjectDataAllList from "./ProjectDataAllList";
import StickyHeadTable from "./test";
import AddProject from "./AddProject";
// import Personal from "./Personal";
// import Profile from "./Profile";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProjectDataList() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Card sx={{ minHeight: 84 + "vh" }}>
        <CardContent>
          <Box sx={{ width: "100%" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ padding: "20px" }}
            >
              ฐานข้อมูลโครงการ
            </Typography>
            <Divider />
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="จัดการข้อมูลโครงการ" {...a11yProps(0)} />
                <Tab label="เพิ่มข้อมูลโครงการ" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              {/* <Profile /> */}
              <ProjectDataAllList />
              {/* <StickyHeadTable /> */}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
            
              <AddProject />
            </CustomTabPanel>
             {/*<CustomTabPanel value={value} index={2}>
              Item Three
            </CustomTabPanel> */}
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

