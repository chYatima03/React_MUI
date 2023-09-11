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

import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";
import "./Dashboad.css";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccordionDash from "../components/AccordionDash";
import BarChart from "../charts/BarChart";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';

export default function Dashboad() {
    return (
        <>
            <div className="bgcolor">
                <Navbar />
                <Box height={70} />
                <Box
                    sx={{
                        display: "flex",
                    }}
                >
                    <Sidenav />

                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        {/* <h1>Home</h1> */}
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Stack spacing={1} direction="column">
                                    <Stack spacing={1} direction="row">
                                        <Card sx={{ minWidth: 49 + "%", height: 110 }} className="gradient">
                                            <CardContent>
                                                <div className="iconStyle">
                                                    <CreateNewFolderIcon />
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
                                                    <HourglassTopIcon />
                                                </div>
                                                <Typography gutterBottom variant="h7" component="div" sx={{ color: "#ffffff" }}>
                                                    54
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                    Total In Process
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Stack>
                                    <Stack spacing={1} direction="row">
                                        <Card sx={{ minWidth: 49 + "%", height: 110 }} className="gradientRejectlight">
                                            <CardContent>
                                                <div className="iconStyle">
                                                    <DoNotDisturbOnIcon />
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
                                                    <CheckCircleIcon />
                                                </div>
                                                <Typography gutterBottom variant="h7" component="div" sx={{ color: "#ffffff" }}>
                                                    1,254
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                    Total Finish Project
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Stack>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>

                                ว่างไว้ก่อนนะ
                            </Grid>
                            <Grid item xs={4}>
                                <Stack spacing={2}>
                                    <Card className="gradientlight" sx={{ padding: "10px" }}>
                                        {/* <CardContent> */}
                                        <Stack spacing={2} direction="row" >
                                            <div className="iconStyle" >
                                                <DeveloperBoardIcon />
                                            </div>
                                            <div className="paddingall" >
                                                <span className="priceTitle" >125662</span>
                                                <br />
                                                <span className="priceSubTitle">Total Project</span>
                                            </div>
                                        </Stack>
                                        {/* </CardContent> */}
                                    </Card>
                                    <Card sx={{ padding: "10px" }}>
                                        {/* <CardContent> */}
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
                                        {/* </CardContent> */}
                                    </Card>
                                </Stack>
                            </Grid>
                            <Box height={28} />
                            <Grid item xs={8}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                        <BarChart />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                        <div className="paddingall">
                                            <span className="priceTitle"> New Projects</span>
                                        </div>

                                        <AccordionDash />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        {/* <DrawerHeader /> */}
                        {/* <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography> */}
                        {/* <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare
            suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
            volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
            Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
            ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
            aliquam sem et tortor. Habitant morbi tristique senectus et.
            Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
            euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography> */}
                    </Box>
                </Box>
            </div>
        </>
    );
}
