// import React from 'react'

// import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";
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

export default function ProjectInformationList() {
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
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <div>ข้อมูลทั่วไป</div>
                    <div>ข้อมูลดำเนินการ</div>
                    <div>ข้อมูลทำสัญญาจ้าง</div>
                    <div>ข้อมูลการเบิกจ่ายเงิน</div>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={9}>
                <Card sx={{ height: 60 + "vh", }}>
                  <CardContent>
                    <ProjectInfo />
                    {/* <div className="paddingall">
                      <span className="priceTitle"> New Projects</span>
                    </div> */}


                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </>
  )
}
