// import React from 'react'

// import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import Navbar from "../../components/Navbar";
import Sidenav from "../../components/Sidenav";
import "./../Dashboad.css";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalMallIcon from '@mui/icons-material/LocalMall';
// import AccordionDash from "../components/AccordionDash";
import BarChart from "../../charts/BarChart";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ProjectInfo from "./ProjectInfo";
import { Link, Outlet } from "react-router-dom";
import projectFilter from "./../../images/nuclear-energy-fusion-fission-isometric-composition-with-isolated-view-laboratory-with-machinery-units-scientists-vector-illustration/2302.i039.015.S.m004.c13.nuclear energy fusion fission isometric set.jpg";
import { Slider } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import DatasetIcon from '@mui/icons-material/Dataset';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import GavelIcon from '@mui/icons-material/Gavel';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function ProjectInformationList() {
  const [sliderValue, setSliderValue] = useState(25)

  // useEffect(() => {
  //   sliderScroll();
  //   // setSliderValue(50);
  // }, []);
  // const sliderScroll = () => {
  //   setSliderValue(40);
  //   // alert(sliderValue)
  // }
  return (
    // <div>ProjectInformationList</div>
    <>
      <Card sx={{ minHeight: 60 + "vh" }}>
        <CardContent>
          <Box sx={{ width: "100%" }}>
            {/* <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ padding: "20px" }}
            >
              กรองข้อมูลโครงการ
            </Typography> */}
            {/* <Divider /> */}
            <Grid container spacing={2}>
              {/* <Grid item xs={4}>
                <Stack spacing={1} direction="column"> */}
              {/* <Stack spacing={1} direction="row">
                    <Card sx={{ minWidth: 49 + "%", height: 110 }} className="gradient">
                      <CardContent>
                        <div className="iconStyle">

                        </div>
                        <Typography gutterBottom variant="h7" component="div" sx={{ color: "#ffffff" }}>
                          20
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                          Total New Project
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card sx={{ minWidth: 49 + "%", height: 110 }} className="gradientlight">
                      <CardContent>
                        <div className="iconStyle">

                        </div>
                        <Typography gutterBottom variant="h7" component="div" sx={{ color: "#ffffff" }}>
                          54
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                          Total In Process
                        </Typography>
                      </CardContent>
                    </Card>
                  </Stack> */}
              {/* <Stack spacing={1} direction="row">
                    <Card sx={{ minWidth: 49 + "%", height: 110 }} className="gradientRejectlight">
                      <CardContent>
                        <div className="iconStyle">

                        </div>
                        <Typography gutterBottom variant="h7" component="div" sx={{ color: "#ffffff" }}>
                          102
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                          Total Reject Project
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card sx={{ minWidth: 49 + "%", height: 110 }} className="gradientInProcess">
                      <CardContent>
                        <div className="iconStyle">

                        </div>
                        <Typography gutterBottom variant="h7" component="div" sx={{ color: "#ffffff" }}>
                          1,254
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                          Total Finish Project
                        </Typography>
                      </CardContent>
                    </Card>
                  </Stack> */}
              {/* </Stack>
              </Grid> */}
              {/* <Grid item xs={4}>

                ว่างไว้ก่อนนะ
              </Grid> */}
              {/* <Grid item xs={4}>
                <Stack spacing={2}>
                  <Card className="gradientlight" sx={{ padding: "10px" }}>
                    
                    <Stack spacing={2} direction="row" >
                      <div className="iconStyle" >
                        
                      </div>
                      <div className="paddingall" >
                        <span className="priceTitle" >125662</span>
                        <br />
                        <span className="priceSubTitle">Total Project</span>
                      </div>
                    </Stack>
                   
                  </Card>
                  <Card sx={{ padding: "10px" }}>
                    
                    <Stack spacing={2} direction="row">
                      <div className="iconStyleblack">
                        <PointOfSaleIcon />
                      </div>
                      <div className="paddingall">
                        <span className="priceTitle">125,144,125</span>
                        <br />
                        <span className="priceSubTitle">Total value</span>
                      </div>
                    </Stack>
                    
                  </Card>
                </Stack>
              </Grid> */}
              {/* <Box height={28} /> */}
              <Grid item xs={3}>
                <Card sx={{ height: 60 + "vh", padding: "20px" }}>
                  <CardContent>
                    <Stack direction="column" justifyContent="flex-center" spacing={1} >
                      <Box
                        component="img"
                        sx={{
                          height: 233,
                          width: 350,
                          maxHeight: { xs: 233, md: 167 },
                          maxWidth: { xs: 350, md: 250 },
                        }}
                        alt="The house from the offer."
                        src={projectFilter}
                      // src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                      />
                      <Typography
                        gutterBottom
                        variant="h7"
                        component="div"
                      // sx={{ padding: "20px" }}
                      >
                        หัวข้อโครงการ
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h7"
                        component="div"
                      // sx={{ padding: "20px" }}
                      >
                        สถานะโครงการ
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h7"
                        component="div"
                      // sx={{ padding: "20px" }}
                      >
                        ความก้าวหน้าโครงการ {sliderValue}%
                      </Typography>
                      <Box sx={{ width: 330 }}>
                        <Slider
                          aria-label="Always visible"
                          defaultValue={sliderValue}
                          getAriaValueText={valuetext}
                          step={10}
                          // marks={marks}
                          // valueLabelDisplay="on"
                          disabled={true}
                        />
                      </Box>

                    </Stack>
                    {/* <Divider /> */}
                    <Stack direction="column" spacing={1} >
                      <Stack direction="row" spacing={1} >
                        <div className="iconProjectData">
                          <InfoIcon />
                        </div>
                        <Link to="" className="menuProjectData"> ข้อมูลทั่วไป</Link>
                      </Stack>
                      <Divider />
                      <Stack direction="row" spacing={1} >
                        <div className="iconProjectData">
                          <DatasetIcon />
                        </div>
                        <Link to="project-detail" className="menuProjectData">รายละเอียดโครงการ</Link>
                      </Stack>
                      <Divider />
                      <Stack direction="row" spacing={1} >
                        <div className="iconProjectData">
                          <RunningWithErrorsIcon />
                        </div>
                        <Link to="project-contract" className="menuProjectData">ข้อมูลดำเนินการ</Link>
                      </Stack>
                      <Divider />
                      <Stack direction="row" spacing={1} >
                        <div className="iconProjectData">
                          <GavelIcon />
                        </div>
                        <Link to="project-operational" className="menuProjectData">ข้อมูลทำสัญญาจ้าง</Link>
                      </Stack>
                      <Divider />
                      <Stack direction="row" spacing={1} >
                        <div className="iconProjectData">
                          <FileDownloadIcon />
                        </div>
                        <Link to="project-report" className="menuProjectData">ดาวน์โหลดเอกสารโครงการ</Link>
                        {/* <Link to="project-info">ข้อมูลการเบิกจ่ายเงิน</Link> */}
                      </Stack>
                    </Stack>



                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={9}>
                {/* <Card sx={{ height: 60 + "vh", }}> */}
                {/* <CardContent> */}

                {/* <ProjectInfo /> */}
                <Outlet />
                {/* <div className="paddingall">
                      <span className="priceTitle"> New Projects</span>
                    </div> */}


                {/* </CardContent> */}
                {/* </Card> */}
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </>
  )
}
