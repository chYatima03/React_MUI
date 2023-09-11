import { Box, Button, Grid, Link, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
// import { Box, Grid, IconButton, Typography } from "@mui/material";
// import Stack from "@mui/material/Stack";

export default function AddProject() {
    return (
        // <div>AddProject</div>
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <Stack direction="row" spacing={2} className="my-2 mb-2">
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{ padding: "20px" }}
                    >
                        เพิ่มข้อมูลโครงการใหม่

                    </Typography>
                </Stack>
                <Box height={20} />
                <Grid container spacing={2} sx={{ padding: "0px 0px 20px 20px" }}>
                    <Grid item xs={1}>
                        <TextField
                            id="outlined-basic"
                            label="ํปี"
                            variant="outlined"
                            size="small"
                            type="text"
                            // value={year}
                            // onChange={handleYearChange}
                            sx={{ minWidth: "100%" }}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            id="outlined-basic"
                            label="ํวันที่เสนอ"
                            variant="outlined"
                            size="small"
                            type="text"
                            // value={date}
                            // onChange={handleDateChange}
                            sx={{ minWidth: "100%" }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="outlined-basic"
                            label="แผนก/ฝ่าย"
                            variant="outlined"
                            size="small"
                            type="text"
                            // value={date}
                            // onChange={handleDateChange}
                            sx={{ minWidth: "100%" }}
                        />
                    </Grid>
                </Grid>
                <Stack direction="row" spacing={2} className="my-2 mb-2">
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{ padding: "20px" }}
                    >
                        รายละเอียดโครงการ

                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    ></Typography>
                    <Typography
                        gutterBottom
                        variant="h7"
                        component="div"
                        sx={{ padding: "20px" }}
                    >
                        <Link href="#">ค่าใช้จ่ายโครงการ</Link>

                    </Typography>

                </Stack>
                {/* <Stack direction="row" spacing={2} className="my-2 mb-2" sx={{ padding: "0px 20px 20px 20px" }}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    ></Typography>
                    <Button variant="contained"
                    // onClick={createUser}
                    >
                        บันทึก
                    </Button>
                </Stack> */}
                <Grid container spacing={2} sx={{ padding: "0px 20px 20px 20px" }}>
                    <Grid item xs={8}>
                        <TextField
                            id="outlined-basic"
                            label="ํชื่อโครงการ"
                            variant="outlined"
                            size="small"
                            type="text"
                            // value={year}
                            // onChange={handleYearChange}
                            sx={{ minWidth: "100%" }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            disabled
                            id="outlined-basic"
                            label="มูลค่า"
                            defaultValue="0"
                            variant="outlined"
                            size="small"
                            type="number"
                            sx={{ minWidth: "100%" }}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ padding: "0px 20px 20px 20px" }}>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="หลักการและเหตุผล"
                            multiline
                            maxRows={3}
                            size="small"
                            sx={{ minWidth: "100%" }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="วัตถุประสงค์ ของโครงการ"
                            multiline
                            maxRows={5}
                            size="small"
                            sx={{ minWidth: "100%" }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="ขอบเขตของโครงการ"
                            multiline
                            maxRows={5}
                            size="small"
                            sx={{ minWidth: "100%" }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="เอกสารแนบ"
                            multiline
                            maxRows={5}
                            size="small"
                            sx={{ minWidth: "100%" }}
                        />
                    </Grid>
                </Grid>
                <Stack direction="row" spacing={2} className="my-2 mb-2" sx={{ padding: "0px 20px 20px 20px" }}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    ></Typography>
                      <Button variant="contained" color="error"
                    // onClick={createUser}
                    >
                        ยกเลิก
                    </Button>
                    <Button variant="contained"
                    // onClick={createUser}
                    >
                        บันทึก
                    </Button>
                </Stack>
                {/* <Grid item xs={12} sx={{ padding: "0px 20px 20px 20px" }}>
                    <Typography variant="h5" align="center">
                        <Button variant="contained"
                        // onClick={createUser}
                        >
                            บันทึก
                        </Button>
                    </Typography>
                </Grid> */}
            </Paper>
        </>
    )
}
