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

export default function ProjectContract() {
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
              ข้อมูลดำเนินการ
            </Typography>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="PR" {...a11yProps(0)} />
                <Tab label="PO" {...a11yProps(1)} />
                <Tab label="เอกสารการรับสินค้า Store" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              {/* <Profile /> */}
              <Paper style={{ maxHeight: 300, overflow: 'auto' }} sx={{ padding: "20px" }}>
                {/* <Stack direction="column" spacing={1} className="my-2 mb-2" > */}
                <Stack direction="row" spacing={2} className="my-2 mb-2" >
                  <span className="priceTitle"> รายการเปิด PR </span>
                  {/* <Typography gutterBottom variant="h7" component="div" >
                      รายการเปิด PR

                      </Typography> */}
                  {/* <span className=""> บลาๆๆ</span> */}
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
                <Stack direction="column" spacing={1} sx={{ padding: "10px 20px 20px 20px" }}>
                  <Stack direction="row" spacing={2} className="my-2 mb-2">
                    <Typography gutterBottom variant="h7" component="div" >
                      1. หน้าจอคอมพิวเตอร์ 23.8 นิ้ว MSI Pro MP241X 75 Hz
                    </Typography>
                    <span className=""> จำนวน </span>
                    <span className=""> 1 </span>
                    <span className=""> เครื่อง </span>
                    <span className=""> ราคา </span>
                    <span className=""> 4,500 บาท</span>
                  </Stack>
                  <Stack direction="row" spacing={2} className="my-2 mb-2">
                    <Typography gutterBottom variant="h7" component="div" >
                      2. หน้าจอคอมพิวเตอร์ 23.8 นิ้ว MSI Pro MP241X 75 Hz
                    </Typography>
                    <span className=""> จำนวน </span>
                    <span className=""> 1 </span>
                    <span className=""> เครื่อง </span>
                    <span className=""> ราคา </span>
                    <span className=""> 4,500 บาท</span>
                  </Stack>
                  <Stack direction="row" spacing={2} className="my-2 mb-2">
                    <Typography gutterBottom variant="h7" component="div" >
                      3. Barcode Printer+ กระดาษพิมพ์ Sticker + Ribbon Wax
                    </Typography>
                    <span className=""> จำนวน </span>
                    <span className=""> 12 </span>
                    <span className=""> ม้วน </span>
                    <span className=""> ราคา </span>
                    <span className=""> 4,500 บาท</span>
                  </Stack>
                  <Stack direction="row" spacing={2} className="my-2 mb-2" >
                    <Typography gutterBottom variant="h7" component="div" >
                      4. Barcode Scanner Handheld UV-DT50Q
                    </Typography>
                    <span className=""> จำนวน </span>
                    <span className=""> 2 </span>
                    <span className=""> เครื่อง </span>
                    <span className=""> ราคา </span>
                    <span className=""> 15,500 บาท</span>
                  </Stack>
                  <Stack direction="row" spacing={2} className="my-2 mb-2" >
                    {/* <span className="priceTitle"> งบประมาณ: </span> */}
                    <Typography gutterBottom variant="h7" component="div" >
                      งบประมาณ:
                    </Typography>
                    <span className=""> 133,106 บาท</span>
                  </Stack>
                </Stack>
                <Typography gutterBottom variant="h7" component="div" >
                  ไฟล์แนบ:
                </Typography>
                <Stack direction="column" spacing={1} sx={{ padding: "10px 20px 20px 20px" }}>
                  <span className="">1. เอกสาร PR1 .pdf</span>
                  <Divider />
                  {/* <span className="">2. เอกสาร PR2 .pdf</span>
                  <Divider /> */}
                </Stack>

                {/* </Stack> */}
              </Paper>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              {/* <Profile /> */}
              <Paper style={{ maxHeight: 300, overflow: 'auto' }} sx={{ padding: "20px" }}>
                {/* <Stack direction="column" spacing={1} className="my-2 mb-2" > */}
                <Stack direction="row" spacing={2} className="my-2 mb-2" >
                  <span className="priceTitle"> รายการเปิด PO </span>
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
                <Stack direction="column" spacing={1} sx={{ padding: "10px 20px 20px 20px" }}>
                  
                  <Stack direction="row" spacing={2} className="my-2 mb-2">
                    <Typography gutterBottom variant="h7" component="div" >
                      1. หน้าจอคอมพิวเตอร์ 23.8 นิ้ว MSI Pro MP241X 75 Hz
                    </Typography>
                    <span className=""> จำนวน </span>
                    <span className=""> 1 </span>
                    <span className=""> เครื่อง </span>
                    <span className=""> ราคา </span>
                    <span className=""> 4,500 บาท</span>
                  </Stack>
                  <Stack direction="row" spacing={2} className="my-2 mb-2">
                    <Typography gutterBottom variant="h7" component="div" >
                      2. หน้าจอคอมพิวเตอร์ 23.8 นิ้ว MSI Pro MP241X 75 Hz
                    </Typography>
                    <span className=""> จำนวน </span>
                    <span className=""> 1 </span>
                    <span className=""> เครื่อง </span>
                    <span className=""> ราคา </span>
                    <span className=""> 4,500 บาท</span>
                  </Stack>
                  <Stack direction="row" spacing={2} className="my-2 mb-2">
                    <Typography gutterBottom variant="h7" component="div" >
                      3. Barcode Printer+ กระดาษพิมพ์ Sticker + Ribbon Wax
                    </Typography>
                    <span className=""> จำนวน </span>
                    <span className=""> 12 </span>
                    <span className=""> ม้วน </span>
                    <span className=""> ราคา </span>
                    <span className=""> 4,500 บาท</span>
                  </Stack>
                  <Stack direction="row" spacing={2} className="my-2 mb-2" >
                    <Typography gutterBottom variant="h7" component="div" >
                      4. Barcode Scanner Handheld UV-DT50Q
                    </Typography>
                    <span className=""> จำนวน </span>
                    <span className=""> 2 </span>
                    <span className=""> เครื่อง </span>
                    <span className=""> ราคา </span>
                    <span className=""> 15,500 บาท</span>
                  </Stack>
                  <Stack direction="row" spacing={2} className="my-2 mb-2" >
                    {/* <span className="priceTitle"> งบประมาณ: </span> */}
                    <Typography gutterBottom variant="h7" component="div" >
                      งบประมาณ:
                    </Typography>
                    <span className=""> 133,106 บาท</span>
                  </Stack>
                </Stack>
                <Typography gutterBottom variant="h7" component="div" >
                  ไฟล์แนบ:
                </Typography>
                <Stack direction="column" spacing={1} sx={{ padding: "10px 20px 20px 20px" }}>
                  <span className="">1. เอกสาร PO1 .pdf</span>
                  <Divider />
                  {/* <span className="">2. เอกสาร PR2 .pdf</span>
                  <Divider /> */}
                </Stack>

                {/* </Stack> */}
              </Paper>

            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Paper style={{ maxHeight: 300, overflow: 'auto' }} sx={{ padding: "20px" }}>
                {/* <Stack direction="column" spacing={1} className="my-2 mb-2" > */}
                <Stack direction="row" spacing={2} className="my-2 mb-2" >
                  <span className="priceTitle"> เอกสารการรับสินค้า </span>
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
                <Stack direction="column" spacing={1} sx={{ padding: "10px 20px 20px 20px" }}>
                  <Stack direction="row" spacing={2} className="my-2 mb-2">
                    <Typography gutterBottom variant="h7" component="div" >
                      1. หน้าจอคอมพิวเตอร์ 23.8 นิ้ว MSI Pro MP241X 75 Hz
                    </Typography>
                    <span className=""> จำนวน </span>
                    <span className=""> 1 </span>
                    <span className=""> เครื่อง </span>
                    <span className=""> วันที่รับ </span>
                    <span className=""> 15/08/2566</span>
                  </Stack>
                  <Stack direction="row" spacing={2} className="my-2 mb-2">
                    <Typography gutterBottom variant="h7" component="div" >
                      2. หน้าจอคอมพิวเตอร์ 23.8 นิ้ว MSI Pro MP241X 75 Hz
                    </Typography>
                    <span className=""> จำนวน </span>
                    <span className=""> 1 </span>
                    <span className=""> เครื่อง </span>
                    <span className=""> วันที่รับ </span>
                    <span className=""> 15/08/2566</span>
                  </Stack>
                  <Stack direction="row" spacing={2} className="my-2 mb-2">
                    <Typography gutterBottom variant="h7" component="div" >
                      3. Barcode Printer+ กระดาษพิมพ์ Sticker + Ribbon Wax
                    </Typography>
                    <span className=""> จำนวน </span>
                    <span className=""> 12 </span>
                    <span className=""> ม้วน </span>
                    <span className=""> วันที่รับ </span>
                    <span className=""> 15/08/2566</span>
                  </Stack>
                  <Stack direction="row" spacing={2} className="my-2 mb-2" >
                    <Typography gutterBottom variant="h7" component="div" >
                      4. Barcode Scanner Handheld UV-DT50Q
                    </Typography>
                    <span className=""> จำนวน </span>
                    <span className=""> 2 </span>
                    <span className=""> เครื่อง </span>
                    <span className=""> วันที่รับ </span>
                    <span className=""> 15/08/2566</span>
                  </Stack>
                  {/* <Stack direction="row" spacing={2} className="my-2 mb-2" > */}
                  {/* <span className="priceTitle"> งบประมาณ: </span> */}
                  {/* <Typography gutterBottom variant="h7" component="div" > */}
                  {/* งบประมาณ: */}
                  {/* </Typography> */}
                  {/* <span className=""> 133,106 บาท</span> */}
                  {/* </Stack> */}
                </Stack>
                <Typography gutterBottom variant="h7" component="div" >
                  ไฟล์แนบ:
                </Typography>
                <Stack direction="column" spacing={1} sx={{ padding: "10px 20px 20px 20px" }}>
                  <span className="">1. เอกสารรับ .pdf</span>
                  <Divider />
                  {/* <span className="">2. เอกสาร PR2 .pdf</span>
                  <Divider /> */}
                </Stack>

                {/* </Stack> */}
              </Paper>
            </CustomTabPanel>
          </Box>
        </CardContent>
      </Card>
      {/* </Paper> */}
    </>
  );
}
