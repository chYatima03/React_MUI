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

export default function ProjectOperational() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>

      <ProjectInfo />
      <Card sx={{ minHeight: 35 + "vh" }}>
        <CardContent>
          <Box sx={{ width: "100%" }}>
            <Typography gutterBottom variant="h7" component="div" >
              ข้อมูลทำสัญญาจ้าง
            </Typography>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="บริษัทรับเหมา" {...a11yProps(0)} />
                <Tab label="สัญญาจัดจ้าง" {...a11yProps(1)} />
                <Tab label="สัญญาประกัน" {...a11yProps(2)} />
                <Tab label="สัญญาซ่อมบำรุง" {...a11yProps(3)} />
                <Tab label="การเบิกจ่าย" {...a11yProps(4)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Paper style={{ maxHeight: 300, overflow: 'auto' }}>
                <Stack direction="column" spacing={1} sx={{ padding: "20px 20px 20px 20px" }} >
                  <Stack direction="row" spacing={2} className="my-2 mb-2">
                    <Typography gutterBottom variant="h7" component="div" >
                      1. บริษัทรับเหมา:
                    </Typography>
                    <span className=""> บริษัท เจริญสุดๆ จำกัด</span>

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
                  <Stack direction="row" spacing={2} className="my-2 mb-2">
                    <Typography gutterBottom variant="h7" component="div" >
                      ที่อยู่:
                    </Typography>
                    <span className=""> 92/5 ซอย - ถนน กาญจนวนิจ 2 ตำบล อะไรก็ว่าไป อำเภอ อะไรก็ว่าไป จังหวัด สงขลา 95478</span>
                  </Stack>
                  <Stack direction="row" spacing={2} className="my-2 mb-2">
                    <Typography gutterBottom variant="h7" component="div" >
                      ติดต่อ:
                    </Typography>
                    <span className=""> 023-590-2546</span>
                    <Typography gutterBottom variant="h7" component="div" >
                      แฟกซ์:
                    </Typography>
                    <span className=""> 023-590-2546</span>
                    <Typography gutterBottom variant="h7" component="div" >
                      อีเมล์:
                    </Typography>
                    <span className=""> test@jarern.co.th</span>
                  </Stack>
                  <Stack direction="row" spacing={2} className="my-2 mb-2">
                    <Typography gutterBottom variant="h7" component="div" >
                      บุคคลประสานงาน:
                    </Typography>
                    <span className=""> นายสมคิด ทองเจริญ</span>
                  </Stack>
                  <Stack direction="row" spacing={2} className="my-2 mb-2">
                    <Typography gutterBottom variant="h7" component="div" >
                      ส่วนงานที่รับผิดชอบ:
                    </Typography>
                    <span className=""> ลิฟต์</span>
                  </Stack>

                </Stack>
                <Divider />
                <Stack direction="column" spacing={1} sx={{ padding: "20px 20px 20px 20px" }}>
                  <Stack direction="row" spacing={2} className="my-2 mb-2" >
                    <Typography gutterBottom variant="h7" component="div" >
                      2. บริษัทรับเหมา:
                    </Typography>
                    <span className=""> บริษัท เจริญสุดๆ จำกัด</span>
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
                  <Stack direction="row" spacing={2} className="my-2 mb-2">
                    <Typography gutterBottom variant="h7" component="div" >
                      ที่อยู่:
                    </Typography>
                    <span className=""> 92/5 ซอย - ถนน กาญจนวนิจ 2 ตำบล อะไรก็ว่าไป อำเภอ อะไรก็ว่าไป จังหวัด สงขลา 95478</span>
                  </Stack>
                  <Stack direction="row" spacing={2} className="my-2 mb-2">
                    <Typography gutterBottom variant="h7" component="div" >
                      ติดต่อ:
                    </Typography>
                    <span className=""> 023-590-2546</span>
                    <Typography gutterBottom variant="h7" component="div" >
                      แฟกซ์:
                    </Typography>
                    <span className=""> 023-590-2546</span>
                    <Typography gutterBottom variant="h7" component="div" >
                      อีเมล์:
                    </Typography>
                    <span className=""> test@jarern.co.th</span>
                  </Stack>
                  <Stack direction="row" spacing={2} className="my-2 mb-2">
                    <Typography gutterBottom variant="h7" component="div" >
                      บุคคลประสานงาน:
                    </Typography>
                    <span className=""> นายสมคิด ทองเจริญ</span>
                  </Stack>
                  <Stack direction="row" spacing={2} className="my-2 mb-2">
                    <Typography gutterBottom variant="h7" component="div" >
                      ส่วนงานที่รับผิดชอบ:
                    </Typography>
                    <span className=""> ลิฟต์</span>
                  </Stack>

                </Stack>
                <Divider />
              </Paper>

            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Paper style={{ maxHeight: 300, overflow: 'auto' }}>
                <Stack direction="column" spacing={1} sx={{ padding: "20px 20px 20px 20px" }} >
                  <Stack direction="row">
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
                  <span className="">1. สัญญาจัดจ้าง1 .pdf</span>
                  <Divider />
                  <span className="">2. สัญญาจัดจ้าง2 .pdf</span>
                  <Divider />
                  <span className="">3. สัญญาจัดจ้าง3 .pdf</span>
                  <Divider />
                  <span className="">4. สัญญาจัดจ้าง4 .pdf</span>
                  <Divider />
                </Stack>
              </Paper>

            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Paper style={{ maxHeight: 300, overflow: 'auto' }}>
                <Stack direction="column" spacing={1} sx={{ padding: "20px 20px 20px 20px" }} >
                  <Stack direction="row">
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
                  <span className="">1. สัญญาประกัน1 .pdf</span>
                  <Divider />
                  <span className="">2. สัญญาประกัน2 .pdf</span>
                  <Divider />
                  <span className="">3. สัญญาประกัน3 .pdf</span>
                  <Divider />
                  <span className="">4. สัญญาประกัน4 .pdf</span>
                  <Divider />
                </Stack>
              </Paper>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <Paper style={{ maxHeight: 300, overflow: 'auto' }}>
                <Stack direction="column" spacing={1} sx={{ padding: "20px 20px 20px 20px" }} >
                  <Stack direction="row">
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
                  <span className="">1. สัญญาซ่อมบำรุง1 .pdf</span>
                  <Divider />
                  <span className="">2. สัญญาซ่อมบำรุง2 .pdf</span>
                  <Divider />
                  <span className="">3. สัญญาซ่อมบำรุง3 .pdf</span>
                  <Divider />
                  <span className="">4. สัญญาซ่อมบำรุง4 .pdf</span>
                  <Divider />
                </Stack>
              </Paper>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
              <Paper style={{ maxHeight: 300, overflow: 'auto' }}>
                <Stack direction="column" spacing={1} sx={{ padding: "20px 20px 20px 20px" }} >

                  <Stack direction="row">
                    <span className="">1. งวด1 </span>
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
                  <Stack direction="row" spacing={1} >
                    <span className="">จำนวนเงิน 200,000 บาท </span>
                    <span className="">ผู้รับเงิน  </span>
                    <span className="">นายสมคิด ทองเจริญ  </span>
                  </Stack>
                  <Stack direction="row" spacing={1} >
                    <span className="">เอกสารการเบิกจ่าย  </span>
                    <span className="">เบิก1.pdf  </span>
                  </Stack>
                  <Divider />
                  <Stack direction="row">
                    <span className="">2. งวด2 </span>
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
                  <Stack direction="row" spacing={1} >
                    <span className="">จำนวนเงิน 200,000 บาท </span>
                    <span className="">ผู้รับเงิน  </span>
                    <span className="">นายสมคิด ทองเจริญ  </span>
                  </Stack>
                  <Stack direction="row" spacing={1} >
                    <span className="">เอกสารการเบิกจ่าย  </span>
                    <span className="">เบิก2.pdf  </span>
                  </Stack>
                  <Divider />
                  <Stack direction="row">
                    <span className="">3. งวด3 </span>
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
                  <Stack direction="row" spacing={1} >
                    <span className="">จำนวนเงิน 200,000 บาท </span>
                    <span className="">ผู้รับเงิน  </span>
                    <span className="">นายสมคิด ทองเจริญ  </span>
                  </Stack>
                  <Stack direction="row" spacing={1} >
                    <span className="">เอกสารการเบิกจ่าย  </span>
                    <span className="">เบิก3.pdf  </span>
                  </Stack>
                  <Divider />
                  <Stack direction="row">
                    <span className="">4. งวด4 </span>
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
                  <Stack direction="row" spacing={1} >
                    <span className="">จำนวนเงิน 200,000 บาท </span>
                    <span className="">ผู้รับเงิน  </span>
                    <span className="">นายสมคิด ทองเจริญ  </span>
                  </Stack>
                  <Stack direction="row" spacing={1} >
                    <span className="">เอกสารการเบิกจ่าย  </span>
                    <span className="">เบิก4.pdf  </span>
                  </Stack>
                  <Divider />
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
