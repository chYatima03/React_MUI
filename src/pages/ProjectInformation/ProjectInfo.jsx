import { Divider, Stack, Grid, Typography, Paper, Card, CardContent, Box } from '@mui/material'
import React from 'react'
import ProjectContract from './ProjectContract';
import ProjectOperational from './ProjectOperational';
import { Outlet } from 'react-router-dom';

export default function ProjectInfo() {
  return (
    <>
      {/* <Paper style={{ maxHeight: 650, overflow: 'auto' }} sx={{ padding: "20px" }}> */}
      <Card sx={{ height: 22 + "vh", }}>
        <CardContent>
          <Grid
            container
            direction="column"
          // style={{ height: "60vh" }}
          // justifyContent="space-"
          // alignItems="start"
          >
            <Grid
              container
              direction="column"
              style={{ height: "60vh" }}
            // justifyContent="space-"
            // alignItems="start"
            >
              <Stack direction="row" >
                <div className="paddingall">
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                  // sx={{ padding: "20px" }}
                  >
                    ข้อมูลทั่วไป
                  </Typography>
                </div>

                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                ></Typography>
                <Typography
                  gutterBottom
                  variant="h7"
                  component="div"
                // sx={{ padding: "20px" }}
                >
                  แก้ไข
                </Typography>
              </Stack>
              <Divider />
              <Stack direction="column" spacing={1} className="my-2 mb-2" sx={{ padding: "20px" }}>
                <Stack direction="row" spacing={2} className="my-2 mb-2" >
                  {/* <span className="priceTitle"> หัวข้อโครงการ: </span> */}
                  <Typography gutterBottom variant="h7" component="div" >
                    หัวข้อโครงการ:
                  </Typography>
                  <span className=""> บลาๆๆ</span>
                </Stack>
                <Stack direction="row" spacing={2} className="my-2 mb-2">
                  {/* <span className="priceTitle"> วันที่เสนอโครงการ: </span> */}
                  <Typography gutterBottom variant="h7" component="div" >
                    วันที่เสนอโครงการ:
                  </Typography>
                  <span className=""> บลาๆๆ</span>
                  <Typography gutterBottom variant="h7" component="div" >
                    ผู้เสนอโครงการ:
                  </Typography>
                  <span className=""> บลาๆๆ</span>
                  <Typography gutterBottom variant="h7" component="div" >
                    แผนก/ฝ่ายเสนอโครงการ:
                  </Typography>
                  <span className=""> บลาๆๆ</span>
                </Stack>
                {/* <Stack direction="row" spacing={2} className="my-2 mb-2">
                  <span className="priceTitle"> ผู้เสนอโครงการ: </span>
                  <Typography gutterBottom variant="h7" component="div" >
                    ผู้เสนอโครงการ:
                  </Typography>
                  <span className=""> บลาๆๆ</span>
                </Stack> */}
                {/* <Stack direction="row" spacing={2} className="my-2 mb-2">
                  <span className="priceTitle"> แผนก/ฝ่ายเสนอโครงการ: </span>
                  <Typography gutterBottom variant="h7" component="div" >
                    แผนก/ฝ่ายเสนอโครงการ:
                  </Typography>
                  <span className=""> บลาๆๆ</span>
                </Stack> */}

                <Stack direction="row" spacing={2} className="my-2 mb-2">
                  {/* <span className="priceTitle"> งบประมาณ: </span> */}
                  <Typography gutterBottom variant="h7" component="div" >
                    งบประมาณ:
                  </Typography>
                  <span className=""> บลาๆๆ</span>
                </Stack>
                <Stack direction="row" spacing={2} className="my-2 mb-2">
                  {/* <span className="priceTitle"> งบประมาณ: </span> */}
                  <Typography gutterBottom variant="h7" component="div" >
                    สถานะ:
                  </Typography>
                  <span className="">อนุมัติ</span>
                </Stack>
              </Stack>




              {/* </Stack> */}
            </Grid>
            {/* <Grid
          container
          direction="column"
          style={{ height: "30vh" }}

        >
          <div className="paddingall">
            ProjectContract
            <Divider />
          </div>
         
          <span className="priceTitle"> ProjectInfo</span>
          <span className="priceTitle"> ProjectInfo</span>
          <span className="priceTitle"> ProjectInfo</span><span className="priceTitle"> ProjectInfo</span>
        </Grid> */}
          </Grid>
          {/* </Stack> */}
          {/* </Paper> */}
        </CardContent>
      </Card>
      <Box sx={{ height: "20px" }} />
    </>
    // <div>ProjectInfo</div>
  )
}
