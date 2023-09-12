import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  TextField,
  Typography,

} from "@mui/material";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
// import { Box, Grid, IconButton, Typography } from "@mui/material";
// import Stack from "@mui/material/Stack";
import testAlign from "./testAlign";
import DeleteIcon from '@mui/icons-material/Delete';
// import "./Product.css";

export default function AddProject() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [formFields, setFormFields] = useState([
    { ordername: '', ordercount: 1, orderprice: 0, orderpriceTotal: 0 },
  ])
  const styy = {
    background: "pink"
  }

  const addFields = () => {
    let object = {
      ordername: '',
      ordercount: '',
      orderprice: '',
      orderpriceTotal: ''
    }

    setFormFields([...formFields, object])
  }
  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }
  const handleFormChange = (event, index) => {
    console.log(index)
    let data = [...formFields];
    data[index][event.target.ordername] = event.target.value;
    setFormFields(data);
  }
  const submit = (e) => {
    e.preventDefault();
    console.log(formFields)
  }
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <>
      
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 650 }} >
        <Box height={70} />
        <Grid
          container
          direction="column"
          style={{ height: "90vh" }}
          justifyContent="space-between"
        // alignItems="start"

        >
          <Stack direction="column" spacing={2} className="my-2 mb-2">

            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ padding: "10px 20px 0px 20px" }}
            >
              ใบเสนอราคา
            </Typography>
            <Stack direction="row" spacing={2} className="my-2 mb-2" sx={{ padding: "10px 20px 0px 0px" }}>
              <Typography
                gutterBottom
                variant="h7"
                component="div"
                sx={{ padding: "20px" }}
              >
                รายการที่ต้องเปิด PR

              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              ></Typography>
              <Button
                variant="contained"
                sx={{ width: 100, height: 40 }}
                endIcon={<AddCircleIcon />}
                onClick={addFields}

              // onClick={handleOpen}

              >
                เพิ่ม
              </Button>
            </Stack>

            {formFields.map((form, index) => {
              return (
                <Stack key={index} direction="row" spacing={2} className="my-2 mb-2" sx={{ padding: "0px 20px 0px 20px" }}>
                  <Grid item xs={4}>
                    <TextField
                      id="standard-helperText"
                      label="ชื่อสินค้า"
                      type="text"
                      // defaultValue="Default Value"
                      helperText="รายการที่ต้องการเปิด PR"
                      variant="standard"
                      size="small"
                      sx={{ minWidth: "100%" }}
                      //  onChange={handlePriceChange}
                      onChange={event => handleFormChange(event, index)}
                      value={form.ordername}
                    />
                  </Grid>

                  <Grid item xs={2} >
                    <TextField
                      id="standard-helperText"
                      label="จำนวน"
                      type="text"
                      // defaultValue="Default Value"
                      helperText="จำนวนที่ต้องการ"
                      variant="standard"
                      size="small"
                      sx={{ minWidth: "100%" }}
                      onChange={event => handleFormChange(event, index)}
                      value={form.ordercount}
                    />
                  </Grid>
                  <Grid item xs={2} >
                    <TextField
                      id="standard-helperText"
                      label="ราคา"
                      type="text"
                      // defaultValue="Default Value"
                      helperText="/หน่วย"
                      variant="standard"
                      size="small"
                      sx={{ minWidth: "100%" }}
                      onChange={event => handleFormChange(event, index)}
                      value={form.orderprice}
                    />
                  </Grid>
                  <Grid item xs={3} >
                    <TextField
                      id="standard-helperText"
                      label="จำนวนเงิน(THB)"
                      type="text"
                      // defaultValue="Default Value"
                      helperText="ทั้งหมด/รายการ"
                      variant="standard"
                      size="small"
                      sx={{ minWidth: "100%" }}
                      onChange={event => handleFormChange(event, index)}
                      value={form.orderpriceTotal}
                    />
                  </Grid>

                  <IconButton className="delorder" sx={{ color: "#f44336" }} onClick={() => removeFields(index)}>
                    <DeleteIcon />
                  </IconButton>

                </Stack>
              )
            })}
          </Stack>

          {/* <div> */}
          <Stack direction="column" alignItems="end" spacing={2} className="my-2 mb-2" sx={{ padding: "10px 20px 20px 20px" }}>
            <Stack direction="column" justifyContent="end" alignItems="end" sx={{ padding: "10px 00px 80px 20px" }}>
              <Stack direction="row" justifyContent="end">
                <Grid container xs={12} >
                  <Typography
                    gutterBottom
                    variant="h7"
                    component="div"
                    sx={{ padding: "10px 130px 0px 20px" }}
                  >
                    รวมเป็นเงิน
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h7"
                    component="div"
                    sx={{ padding: "10px 0px 0px 20px" }}
                  >
                    58,000.00
                  </Typography>
                </Grid>
              </Stack>
              <Stack direction="row" justifyContent="end">
                <Grid container xs={12} >
                  <Typography
                    gutterBottom
                    variant="h7"
                    component="div"
                    sx={{ padding: "10px 130px 0px 20px" }}
                  >
                    จำนวนเงินรวมทั้งสิ้น
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h7"
                    component="div"
                    sx={{ padding: "10px 0px 0px 20px" }}
                  >
                    58,000.00
                  </Typography>
                </Grid>
              </Stack>
            </Stack>
            <Stack direction="row" >
              <Button
                variant="contained"
                color="error"
              // onClick={createUser}
              >
                ยกเลิก
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={submit}
              // onClick={createUser}
              >
                บันทึก
              </Button>
            </Stack>
          </Stack>
          
          {/* </div> */}
        </Grid>
      </Box>

    </>

  );



  return (
    // <div>AddProject</div>
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
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
              type="date"
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
            <Button onClick={toggleDrawer("right", true)}>
              ค่าใช้จ่ายโครงการ
            </Button>
            <Drawer
              anchor="right"
              open={state["right"]}
              onClose={toggleDrawer("right", false)}
            >
              {list("right")}
            </Drawer>
            {/* <Link href="#"></Link> */}
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
          <Grid item xs={4}>
            <TextField
              id="outlined-multiline-flexible"
              label="วัตถุประสงค์ ของโครงการ"
              multiline
              maxRows={5}
              size="small"
              sx={{ minWidth: "100%" }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="outlined-multiline-flexible"
              label="ขอบเขตของโครงการ"
              multiline
              maxRows={5}
              size="small"
              sx={{ minWidth: "100%" }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="outlined-multiline-flexible"
              label="ผลที่คาดว่าจะได้รับ"
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
        <Stack
          direction="row"
          spacing={2}
          className="my-2 mb-2"
          sx={{ padding: "0px 20px 20px 20px" }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button
            variant="contained"
            color="error"
          // onClick={createUser}
          >
            ยกเลิก
          </Button>
          <Button
            variant="contained"
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
  );
}
