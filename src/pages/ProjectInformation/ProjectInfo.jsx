import { Divider, Stack, Grid } from '@mui/material'
import React from 'react'
import ProjectContract from './ProjectContract';
import ProjectOperational from './ProjectOperational';

export default function ProjectInfo() {
  return (
    <>
      <Grid
        container
        direction="column"
        style={{ height: "60vh" }}
      // justifyContent="space-"
      // alignItems="start"
      >
        <Grid
          container
          direction="column"
          style={{ height: "30vh" }}
        // justifyContent="space-"
        // alignItems="start"
        >
          {/* <Stack direction="column" > */}
          <div className="paddingall">
            <span className="priceTitle"> ProjectInfo</span>

            <Divider />
          </div>
          <span className="priceTitle"> ProjectInfo</span>
          <span className="priceTitle"> ProjectInfo</span>
          <span className="priceTitle"> ProjectInfo</span><span className="priceTitle"> ProjectInfo</span>

          {/* </Stack> */}
        </Grid>
        <Grid
          container
          direction="column"
          style={{ height: "30vh" }}
        // justifyContent="space-"
        // alignItems="start"
        >
          {/* <Stack direction="column" > */}
          <div className="paddingall">
            ProjectContract
            {/* <span className="priceTitle"> ProjectInfo</span> */}
            <Divider />
          </div>
          <span className="priceTitle"> ProjectInfo</span>
          <span className="priceTitle"> ProjectInfo</span>
          <span className="priceTitle"> ProjectInfo</span><span className="priceTitle"> ProjectInfo</span>

          {/* </Stack> */}
        </Grid>

      </Grid>
      {/* </Stack> */}

    </>
    // <div>ProjectInfo</div>
  )
}
