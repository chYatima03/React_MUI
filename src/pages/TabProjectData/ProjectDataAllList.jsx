// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import { useAppStore } from '../appStore';
// import * as React from 'react';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import { db } from "./../../firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { useState, useEffect } from "react";
import EditProjectData from "./test/EditProjectData";
import AddProjectData from "./test/AddProjectData";
// import AddProduct from "../Products/AddProduct";
import { useAppStore } from "../appStore";
import { Outlet } from "react-router-dom";

// const columns = [
//     { id: 'name', label: 'Name', minWidth: 170 },
//     { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
//     {
//         id: 'population',
//         label: 'Population',
//         minWidth: 170,
//         align: 'right',
//         format: (value) => value.toLocaleString('en-US'),
//     },
//     {
//         id: 'size',
//         label: 'Size\u00a0(km\u00b2)',
//         minWidth: 170,
//         align: 'right',
//         format: (value) => value.toLocaleString('en-US'),
//     },
//     {
//         id: 'density',
//         label: 'Density',
//         minWidth: 170,
//         align: 'right',
//         format: (value) => value.toFixed(2),
//     },
// ];

// function createData(name, code, population, size) {
//     const density = population / size;
//     return { name, code, population, size, density };
// }

// const rows = [
//     createData('India', 'IN', 1324171354, 3287263),
//     createData('China', 'CN', 1403500365, 9596961),
//     createData('Italy', 'IT', 60483973, 301340),
//     createData('United States', 'US', 327167434, 9833520),
//     createData('Canada', 'CA', 37602103, 9984670),
//     createData('Australia', 'AU', 25475400, 7692024),
//     createData('Germany', 'DE', 83019200, 357578),
//     createData('Ireland', 'IE', 4857000, 70273),
//     createData('Mexico', 'MX', 126577691, 1972550),
//     createData('Japan', 'JP', 126317000, 377973),
//     createData('France', 'FR', 67022000, 640679),
//     createData('United Kingdom', 'GB', 67545757, 242495),
//     createData('Russia', 'RU', 146793744, 17098246),
//     createData('Nigeria', 'NG', 200962417, 923768),
//     createData('Brazil', 'BR', 210147125, 8515767),
// ];

export default function ProjectDataAllList() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const setRows = useAppStore((state) => state.setRows);
    const rows = useAppStore((state) => state.rows);
    const empCollectionRef = collection(db, "Projects");

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [formid, setFormid] = useState("");
    const [editopen, setEditOpen] = useState(false);
    // const handleAddOpen = () => setEditOpen(true);
    const handleEditOpen = () => setEditOpen(true);
    const handleEditClose = () => setEditOpen(false);
    const [preview, setPreview] = useState("");

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };
    useEffect(() => {
        getUsers();

    }, []);
    const getUsers = async () => {
        const data = await getDocs(empCollectionRef);
        // console.log(data)
        setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        // console.log(rows);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const editUser = (id, name, price, department, projectstatus, username, year, date) => {
        const data = {
            id: id,
            name: name,
            price: price,
            department: department,
            projectstatus: projectstatus,
            username: username,
            year: year,
            date: date
        };
        setFormid(data);
        handleEditOpen();
    };
    const deleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.value) {
                deleteApi(id);
            }
        });
    };

    const deleteApi = async (id) => {
        const userDoc = doc(db, "Products", id);
        await deleteDoc(userDoc);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        getUsers();
    };
    const filterData = (v) => {
        if (v) {
            setRows([v]);
        } else {
            getUsers();
        }
    };

    const viewProject = async (id) => {
        // alert(id)
        setPreview(id);
    }
    return (
        <>
            {rows.length > 0 && preview == "" && (

                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    {/* <Outlet /> */}
                    <Stack direction="row" spacing={2} className="my-2 mb-2">
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            sx={{ padding: "20px" }}
                        >
                            จัดการข้อมูลโครงการ

                        </Typography>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        ></Typography>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={rows}
                            sx={{ width: 300, padding: "20px 0px 20px 0px" }}
                            onChange={(e, v) => filterData(v)}
                            getOptionLabel={(rows) => rows.name || ""}
                            renderInput={(params) => (
                                <TextField {...params} size="small" label="ค้นหาชื่อโครงการ" />
                            )}
                        />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={rows}
                            sx={{ width: 100, padding: "20px 0px 20px 0px" }}
                            onChange={(e, v) => filterData(v)}
                            getOptionLabel={(rows) => rows.year || ""}
                            renderInput={(params) => (
                                <TextField {...params} size="small" label="ปี" />
                            )}
                        />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={rows}
                            sx={{ width: 100, padding: "20px 0px 20px 0px" }}
                            onChange={(e, v) => filterData(v)}
                            getOptionLabel={(rows) => rows.projectstatus || ""}
                            renderInput={(params) => (
                                <TextField {...params} size="small" label="สถานะ" />
                            )}
                        />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={rows}
                            sx={{ width: 200, padding: "20px 0px 20px 0px" }}
                            onChange={(e, v) => filterData(v)}
                            getOptionLabel={(rows) => rows.department || ""}
                            renderInput={(params) => (
                                <TextField {...params} size="small" label="แผนก/ฝ่าย" />
                            )}
                        />

                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={rows}
                            sx={{ width: 200, padding: "20px 0px 20px 0px" }}
                            onChange={(e, v) => filterData(v)}
                            getOptionLabel={(rows) => rows.username || ""}
                            renderInput={(params) => (
                                <TextField {...params} size="small" label="เจ้าของโครงการ" />
                            )}
                        />
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            sx={{ padding: "20px 20px 20px 0px" }}
                        >
                            <Button
                                variant="contained"
                                sx={{ width: 100, height: 40 }}
                            // endIcon={<AddCircleIcon />}
                            // onClick={handleOpen}
                            >
                                Export
                            </Button>
                        </Typography>
                        {/* <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            sx={{ padding: "20px 0px 20px 0px" }}
                        >
                            <Button
                                variant="contained"
                                sx={{ width: 100, height: 40 }}
                                endIcon={<AddCircleIcon />}
                                onClick={handleOpen}
                            >
                                เพิ่ม
                            </Button>
                        </Typography> */}
                    </Stack>
                    {/* <Divider /> */}
                    <Box height={10} />
                    <Stack direction="row" spacing={2} className="my-2 mb-2" >
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        ></Typography>
                        {/* <Button
                            variant="contained"
                            endIcon={<AddCircleIcon />}
                            onClick={handleOpen}
                        >
                            Add
                        </Button> */}
                    </Stack>
                    <Box height={10} />
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left" style={{ minWidth: "10px" }}>
                                        ลำดับ
                                    </TableCell>
                                    <TableCell align="left" style={{ minWidth: "100px" }}>
                                        สถานะ
                                    </TableCell>
                                    <TableCell align="left" style={{ minWidth: "100px" }}>
                                        ปี
                                    </TableCell>
                                    <TableCell align="left" style={{ minWidth: "100px" }}>
                                        ชื่อโครงการ
                                    </TableCell>
                                    <TableCell align="left" style={{ minWidth: "100px" }}>
                                        มูลค่า
                                    </TableCell>
                                    <TableCell align="left" style={{ minWidth: "100px" }}>
                                        แผนก
                                    </TableCell>
                                    <TableCell align="left" style={{ minWidth: "100px" }}>
                                        ผู้เสนอโครงการ
                                    </TableCell>

                                    <TableCell align="left" style={{ minWidth: "100px" }}>
                                        วันที่เสนอโครงการ
                                    </TableCell>
                                    {/* <TableCell align="left" style={{ minWidth: "100px" }}>

                                    </TableCell> */}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow
                                                hover
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={row.code}

                                            >
                                                <TableCell align="left">1</TableCell>
                                                <TableCell align="left">
                                                    <Autocomplete
                                                        disablePortal
                                                        id="combo-box-demo"
                                                        options={rows}
                                                        sx={{ width: 100 }}
                                                        // onChange={(e, v) => filterData(v)}
                                                        getOptionLabel={(rows) => rows.projectstatus || ""}
                                                        renderInput={(params) => (
                                                            <TextField {...params} size="small" label="สถานะ" />
                                                        )}
                                                    />
                                                </TableCell>
                                                <TableCell align="left">{row.year}</TableCell>
                                                <TableCell align="left" onClick={() => { viewProject(row.id) }}>{row.name}</TableCell>
                                                <TableCell align="left">{row.price}</TableCell>
                                                <TableCell align="left">{row.department}</TableCell>
                                                <TableCell align="left">{row.username}</TableCell>
                                                <TableCell align="left">{row.date}</TableCell>
                                                {/* <TableCell align="left">
                                                    <Stack spacing={2} direction="row">
                                                        <EditIcon
                                                            style={{
                                                                fontSize: "20px",
                                                                color: "blue",
                                                                cursor: "pointer",
                                                            }}
                                                            className="cursor-pointer"

                                                            onClick={() => {
                                                                editUser(
                                                                    row.id,
                                                                    row.name,
                                                                    row.price,
                                                                    row.department,
                                                                    row.projectstatus,
                                                                    row.username,
                                                                    row.year,
                                                                    row.date
                                                                );
                                                            }}
                                                        />
                                                        <DeleteIcon
                                                            style={{
                                                                fontSize: "20px",
                                                                color: "darkred",
                                                                cursor: "pointer",
                                                            }}
                                                            onClick={() => {
                                                                deleteUser(row.id);
                                                            }}
                                                        />
                                                    </Stack>
                                                </TableCell> */}
                                            </TableRow>
                                        );
                                    })}
                                {/* {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })} */}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            )}
            {rows.length == 0 && preview == "" && (
                <>
                    <Paper sx={{ width: "98%", overflow: "hidden", padding: "12px" }}>
                        <Box height={20} />
                        <Skeleton variant="rectangular" width={"100%"} height={30} />
                        <Box height={40} />
                        <Skeleton variant="rectangular" width={"100%"} height={60} />
                        <Box height={20} />
                        <Skeleton variant="rectangular" width={"100%"} height={30} />
                        <Box height={20} />
                        <Skeleton variant="rectangular" width={"100%"} height={30} />
                        <Box height={20} />
                        <Skeleton variant="rectangular" width={"100%"} height={30} />
                        <Box height={20} />
                        <Skeleton variant="rectangular" width={"100%"} height={30} />
                        <Box height={20} />
                    </Paper>
                </>
            )}
            {/* Add */}
            <Modal
                open={open}
                onClose={handleOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AddProjectData closeEvent={handleClose} />
                </Box>
            </Modal>
            {/* Edit */}
            <Modal
                open={editopen}
                onClose={handleEditOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <EditProjectData closeEvent={handleEditClose} fid={formid} />
                </Box>
            </Modal>

            {preview != "" && (
                <>
                ss
                </>
            )}
        </>
    );
}
