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
import "../Dash.css";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccordionDash from "../components/AccordionDash";
import BarChart from "../charts/BarChart";

export default function Home() {
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
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Card sx={{ minWidth: 49 + "%", height: 140 }} className="gradient">
                  <CardContent>
                    <div className="iconStyle">
                        <CreditCardIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: "#ffffff"}}>
                      $500.00
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                      Total Earnings
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography> */}
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 49 + "%", height: 140 }} className="gradientlight">
                  <CardContent>
                    <div className="iconStyle">
                        <LocalMallIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: "#ffffff"}}>
                      $900.00
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                      Total Orders
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography> */}
                  </CardContent>
                </Card>
              </Stack>
            </Grid>

            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card className="gradientlight">
                  {/* <CardContent> */}
                  <Stack spacing={2} direction="row">
                    <div className="iconStyle">
                      <StoreIcon />
                    </div>
                    <div className="paddingall" >
                      <span className="priceTitle" >$2456</span>
                      <br />
                      <span className="priceSubTitle">Total Income</span>
                    </div>
                  </Stack>
                  {/* </CardContent> */}
                </Card>
                <Card >
                  {/* <CardContent> */}
                  <Stack spacing={2} direction="row">
                    <div className="iconStyleblack">
                      <StoreIcon />
                    </div>
                    <div className="paddingall">
                      <span className="priceTitle">$2456</span>
                      <br />
                      <span className="priceSubTitle">Total Income</span>
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
                      <span className="priceTitle"> Popular Productions</span>
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
