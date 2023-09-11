import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import Sidenav from "../../../components/Sidenav";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../../../firebase-config";
import { useAppStore } from "../../appStore";

const currencies = [
    
    {
      value: 'Mobile',
      label: 'Mobile',
    },
    {
      value: 'Labtop',
      label: 'Labtop',
    },
    {
      value: 'Smart Watch',
      label: 'Smart Watch',
    },
    {
      value: 'Other',
      label: 'Other',
    },
  ];

export default function AddProjectData({ closeEvent }) {
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [date, setDate] = useState("");
    const [price, setPrice] = useState(0);
    const [projectstatus, setProjectstatus] = useState("");
    const [username, setUsername] = useState("");
    const [department, setDepartment] = useState("");
    // const [rows, setRows] = useState([]);
    const setRows = useAppStore((state) => state.setRows);
    const empCollectionRef = collection(db, "Projects");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    }
    const handleProjectStatusChange = (event) => {
        setProjectstatus(event.target.value);
    }
    const handleYearChange = (event) => {
        setYear(event.target.value);
    }
    const handleDateChange = (event) => {
        setDate(event.target.value);
    }
    const handleDepartmentChange = (event) => {
        setDepartment(event.target.value);
    }
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const createUser = async ()=>{
        await addDoc(empCollectionRef, {
            name: name,
            price: Number(price),
            year: year,
            date: date,
            username: username,
            department: department,
            projectstatus: 'new',
            // date: String(new Date()),
        });
        getUsers();
        closeEvent();
        Swal.fire("Submitted!", "Your file has been submitted.","success");

    }

    const getUsers = async() => {
        const data = await getDocs(empCollectionRef);
        setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
    }
  return (
    <>
      <Box sx={{ m: 2 }} />
      {/* <h1>AddProduct</h1> */}
      <Typography id="modal-modal-title" variant="h6" align="center">
      แก้ไขข้อมูลโครงการ
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={20} />
      <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TextField
                        id="outlined-basic"
                        label="ํปี"
                        variant="outlined"
                        size="small"
                        type="text"
                        value={year}
                        onChange={handleYearChange}
                        sx={{ minWidth: "100%" }}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        id="outlined-basic"
                        label="ํวันที่เสนอ"
                        variant="outlined"
                        size="small"
                        type="text"
                        value={date}
                        onChange={handleDateChange}
                        sx={{ minWidth: "100%" }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="outlined-basic"
                        label="แผนก/ฝ่าย"
                        variant="outlined"
                        size="small"
                        type="text"
                        value={department}
                        onChange={handleDepartmentChange}
                        sx={{ minWidth: "100%" }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-basic"
                        label="ชื่อโครงการ"
                        variant="outlined"
                        size="small"
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        sx={{ minWidth: "100%" }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="outlined-basic"
                        label="ราคา"
                        variant="outlined"
                        type="number"
                        size="small"
                        value={price}
                        onChange={handlePriceChange}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">บาท</InputAdornment>,
                        }}
                        sx={{ minWidth: "100%" }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="outlined-basic"
                        label="ผู้เสนอโครงการ"
                        variant="outlined"
                        type="text"
                        size="small"
                        value={username}
                        onChange={handleUsernameChange}
                        
                        sx={{ minWidth: "100%" }}
                    >

                    </TextField>
                </Grid>
                <Grid item xs={12}>

                    <TextField
                        id="standard-multiline-static"
                        // label="เอกสารแนบ"
                        // variant="outlined"
                        size="small"
                        type="file"
                        // value={department}
                        // onChange={handleNameChange}
                        sx={{ minWidth: "100%" }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" align="center">
                        <Button variant="contained" onClick={createUser}>
                            บันทึก
                        </Button>
                    </Typography>
                </Grid>
            </Grid>
      <Box sm={{ m:4}} />
    </>
  );
}
