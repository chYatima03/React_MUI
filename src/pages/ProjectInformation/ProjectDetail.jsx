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
import ProjectInfo from "./ProjectInfo";
import { Divider } from "@mui/material";
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

export default function ProjectDetail() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            {/* <Paper style={{ maxHeight: 800, overflow: 'auto' }} sx={{ padding: "20px" }}> */}
            <ProjectInfo />
            <Card sx={{ minHeight: 35 + "vh" }}>
                <CardContent>
                    <Box sx={{ width: "100%" }}>
                        <Typography gutterBottom variant="h7" component="div" >
                            รายละเอียดโครงการ
                        </Typography>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                aria-label="basic tabs example"
                            >
                                <Tab label="รายละเอียดโครงการ" {...a11yProps(0)} />
                                <Tab label="เอกสารการขึ้นทะเบียนเอกสารใหม่" {...a11yProps(1)} />
                                <Tab label="แผน" {...a11yProps(2)} />
                                <Tab label="ใบเสนอราคา" {...a11yProps(3)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <Paper style={{ maxHeight: 300, overflow: 'auto' }}>
                                <Stack direction="column" spacing={1} sx={{ padding: "20px 20px 20px 20px" }} >
                                    {/* <span className="priceTitle">หลักการและเหตุผล:</span> */}
                                    <Stack direction="row" >
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
                                    <Typography gutterBottom variant="h7" component="div" >
                                        หลักการและเหตุผล:
                                    </Typography>
                                    <Stack direction="column" spacing={1} sx={{ padding: "0px 0px 0px 20px" }} >

                                        <span className="">บลาๆๆ บลาๆๆบลาๆๆบลาๆๆบลาๆๆบลาๆๆบลาๆๆบลาๆๆบลาๆๆบลาๆๆ</span>
                                    </Stack>
                                    {/* <span className="priceTitle">วัตถุประสงค์:</span> */}
                                    <Typography gutterBottom variant="h7" component="div" >
                                        วัตถุประสงค์:
                                    </Typography>
                                    <Stack direction="column" spacing={1} sx={{ padding: "0px 0px 0px 20px" }} >

                                        <span className="" >บลาๆๆ บลาๆๆบลาๆๆบลาๆๆบลาๆๆบลาๆๆบลาๆๆบลาๆๆบลาๆๆบลาๆๆ</span>
                                    </Stack>
                                    {/* <Divider /> */}
                                    {/* <span className="priceTitle">ขอบเขตของโครงการ:</span> */}
                                    <Typography gutterBottom variant="h7" component="div" >
                                        ขอบเขตของโครงการ:
                                    </Typography>
                                    <Stack direction="column" spacing={1} sx={{ padding: "0px 0px 0px 20px" }} >

                                        <span className="">บลาๆๆ บลาๆๆบลาๆๆบลาๆๆบลาๆๆบลาๆๆบลาๆๆบลาๆๆบลาๆๆบลาๆๆ</span>
                                    </Stack>
                                    {/* <Divider /> */}

                                </Stack>
                            </Paper>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <Paper style={{ maxHeight: 300, overflow: 'auto' }}>
                                
                                <Stack direction="column" spacing={1} sx={{ padding: "20px 20px 20px 20px" }} >
                                <Stack direction="row" >
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
                                    <span className="">1. เอกสารขึ้นทะเบียนใหม่.pdf</span>
                                    {/* <Divider /> */}
                                </Stack>
                            </Paper>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <Paper style={{ maxHeight: 300, overflow: 'auto' }}>
                                <Stack direction="column" spacing={1} sx={{ padding: "20px 20px 20px 20px" }} >
                                <Stack direction="row" >
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
                                    <span className="">1. แผนการดำเนินงาน.pdf</span>
                                    {/* <Divider /> */}
                                </Stack>
                            </Paper>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={3}>
                            <Paper style={{ maxHeight: 300, overflow: 'auto' }}>
                                <Stack direction="column" spacing={1} sx={{ padding: "20px 20px 20px 20px" }} >
                                <Stack direction="row" >
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
                                    <span className="">1. ใบเสนอราคา1.pdf</span>
                                    <span className="">2. ใบเสนอราคา2.pdf</span>
                                    {/* <Divider /> */}
                                </Stack>
                            </Paper>
                        </CustomTabPanel>

                    </Box>
                </CardContent>
            </Card>
            {/* </Paper> */}
        </>
    );
}
