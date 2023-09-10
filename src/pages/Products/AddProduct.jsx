import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import Sidenav from "../../components/Sidenav";
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
import { db } from "./../../firebase-config";
import { useAppStore } from "../appStore";

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

export default function AddProduct({ closeEvent }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    // const [rows, setRows] = useState([]);
    const setRows = useAppStore((state) => state.setRows);
    const empCollectionRef = collection(db, "Products");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handlePriceChange =(event) => {
        setPrice(event.target.value);
    }
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    const createUser = async ()=>{
        await addDoc(empCollectionRef, {
            name: name,
            price: Number(price),
            category: category,
            date: String(new Date()),
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
        Add Product
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Name"
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
            label="Price"
            variant="outlined"
            type="number"
            size="small"
            value={price}
            onChange={handlePriceChange}
            InputProps={{
                endAdornment: <InputAdornment position="end">Bath</InputAdornment>,
              }}
            // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Category"
            variant="outlined"
            type="text"
            select
            size="small"
            value={category}
            onChange={handleCategoryChange}
            sx={{ minWidth: "100%" }}
          >
            {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
            </TextField>
        </Grid>
        <Grid item xs={12}>
        <Typography  variant="h5" align="center">
        <Button variant="contained" onClick={createUser}>
            Submit
        </Button>
      </Typography>
        </Grid>
      </Grid>
      <Box sm={{ m:4}} />
    </>
  );
}
