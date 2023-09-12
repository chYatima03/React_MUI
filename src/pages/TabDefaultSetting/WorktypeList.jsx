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
import EditProjectData from "../TabProjectData/test/EditProjectData";
import AddProjectData from "../TabProjectData/test/AddProjectData";
// import AddProduct from "../Products/AddProduct";
import { useAppStore } from "../appStore";
import { Outlet } from "react-router-dom";
import { Drawer, Grid, IconButton } from "@mui/material";


export default function WorktypeList() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const setRows = useAppStore((state) => state.setRows);
    const rows = useAppStore((state) => state.rows);
    const empCollectionRef = collection(db, "ProjectType");

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [formid, setFormid] = useState("");
    const [editopen, setEditOpen] = useState(false);
    // const handleAddOpen = () => setEditOpen(true);
    const handleEditOpen = () => setEditOpen(true);
    const handleEditClose = () => setEditOpen(false);
    const [preview, setPreview] = useState("");
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

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
    const editUser = (id, name) => {
        const data = {
            id: id,
            name: name
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
                sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 550 }} >
                <Box height={70} />
                <Grid
                    container
                    direction="column"
                    style={{ height: "90vh" }}
                    justifyContent="space-between"
                // alignItems="start"
                >
                    <Stack direction="column" spacing={2} className="my-2 mb-2" sx={{ padding: "20px 20px 20px 20px" }}>
                        <Stack direction="row" spacing={2} className="my-2 mb-2" >
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="div"

                            >
                                เพิ่มข้อมูลประเภทโครงการ

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
                            // onClick={addFields}

                            // onClick={handleOpen}

                            >
                                เพิ่ม
                            </Button>
                        </Stack>

                        {/* {formFields.map((form, index) => { */}
                        {/* return ( */}
                        <Paper sx={{ width: '100%', overflow: 'hidden' }} >
                            <Stack direction="row" spacing={2} className="my-2 mb-2" sx={{ padding: "20px 20px 20px 20px" }}>
                                <Grid item xs={12}>
                                    <TextField
                                        id="standard-helperText"
                                        label="ชื่อประเภทโครงการ"
                                        type="text"
                                        // defaultValue="Default Value"
                                        helperText=""
                                        variant="standard"
                                        size="small"
                                        sx={{ minWidth: "100%" }}
                                    //  onChange={handlePriceChange}
                                    //   onChange={event => handleFormChange(event, index)}
                                    //   value={form.ordername}
                                    />
                                </Grid>

                                {/* <Grid item xs={4} >
                                    <TextField
                                        id="standard-helperText"
                                        label="ชื่อฝ่าย"
                                        type="text"
                                        // defaultValue="Default Value"
                                        helperText=""
                                        variant="standard"
                                        size="small"
                                        sx={{ minWidth: "100%" }}
                                    //   onChange={event => handleFormChange(event, index)}
                                    //   value={form.ordercount}
                                    />
                                </Grid> */}
                                {/* <Grid item xs={4} >
                                    <TextField
                                        id="standard-helperText"
                                        label="ชื่อตำแหน่ง"
                                        type="text"
                                        // defaultValue="Default Value"
                                        helperText=""
                                        variant="standard"
                                        size="small"
                                        sx={{ minWidth: "100%" }}
                                    //   onChange={event => handleFormChange(event, index)}
                                    //   value={form.orderprice}
                                    />
                                </Grid> */}


                                <IconButton className="delorder" sx={{ color: "#f44336" }}
                                //   onClick={() => removeFields(index)}
                                >
                                    <DeleteIcon />
                                </IconButton>

                            </Stack>
                        </Paper>
                        {/* ) */}
                        {/* })} */}
                    </Stack>

                    {/* <div> */}
                    <Stack direction="column" alignItems="end" spacing={2} className="my-2 mb-2" sx={{ padding: "10px 20px 20px 20px" }}>
                        {/* <Stack direction="column" justifyContent="end" alignItems="end" sx={{ padding: "10px 00px 80px 20px" }}>
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
                        </Stack> */}
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
                            // onClick={submit}
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
        // <div>DepartmentList</div>
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
                            ข้อมูลประเภทงาน

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
                            sx={{ width: 250, padding: "20px 0px 20px 0px" }}
                            onChange={(e, v) => filterData(v)}
                            getOptionLabel={(rows) => rows.name || ""}
                            renderInput={(params) => (
                                <TextField {...params} size="small" label="ค้นหาชื่อประเภทโครงการ" />
                            )}
                        />
                        {/* <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={rows}
                            sx={{ width: 250, padding: "20px 0px 20px 0px" }}
                            onChange={(e, v) => filterData(v)}
                            getOptionLabel={(rows) => rows.year || ""}
                            renderInput={(params) => (
                                <TextField {...params} size="small" label="ค้นหาชื่อฝ่าย" />
                            )}
                        /> */}
                        {/* <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={rows}
                            sx={{ width: 250, padding: "20px 0px 20px 0px" }}
                            onChange={(e, v) => filterData(v)}
                            getOptionLabel={(rows) => rows.projectstatus || ""}
                            renderInput={(params) => (
                                <TextField {...params} size="small" label="ค้นหาชื่อตำแหน่ง" />
                            )}
                        /> */}
                        {/* <Autocomplete
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
                    /> */}
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
                            <Button
                                variant="contained"
                                sx={{ width: 100, height: 40 }}
                                endIcon={<AddCircleIcon />}
                                onClick={toggleDrawer("right", true)}>

                                เพิ่ม
                            </Button>
                            <Drawer
                                anchor="right"
                                open={state["right"]}
                                onClose={toggleDrawer("right", false)}
                            >
                                {list("right")}
                            </Drawer>

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
                                        ประเภทโครงการ
                                    </TableCell>
                                    {/* <TableCell align="left" style={{ minWidth: "100px" }}>
                                        ฝ่าย
                                    </TableCell> */}
                                    {/* <TableCell align="left" style={{ minWidth: "100px" }}>
                                        ชื่อโครงการ
                                    </TableCell> */}
                                    {/* <TableCell align="left" style={{ minWidth: "100px" }}>
                                        ตำแหน่ง
                                    </TableCell> */}

                                    <TableCell align="left" style={{ minWidth: "100px" }}>

                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        return (
                                            <TableRow
                                                hover
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={row.code}

                                            >
                                                <TableCell align="left">{index + 1}</TableCell>
                                                {/* <TableCell align="left">
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
                                                </TableCell> */}
                                                <TableCell align="left">{row.name}</TableCell>
                                                {/* <TableCell align="left">โปรแกรมเมอร์</TableCell> */}
                                                {/* <TableCell align="left">หัวหน้าหน่วยโปรแกรมเมอร์</TableCell> */}
                                                {/* <TableCell align="left">{row.year}</TableCell> */}
                                                {/* <TableCell align="left" onClick={() => { viewProject(row.id) }}>{row.name}</TableCell> */}
                                                {/* <TableCell align="left">{row.price}</TableCell> */}
                                                {/* <TableCell align="left">{row.department}</TableCell> */}
                                                {/* <TableCell align="left">{row.username}</TableCell> */}
                                                {/* <TableCell align="left">{row.date}</TableCell> */}
                                                <TableCell align="left">
                                                    <Stack spacing={2} direction="row">
                                                        <EditIcon
                                                            style={{
                                                                fontSize: "20px",
                                                                color: "blue",
                                                                cursor: "pointer",
                                                            }}
                                                            className="cursor-pointer"

                                                            // onClick={() => {
                                                            //     editUser(
                                                            //         row.id,
                                                            //         row.name,
                                                            //         row.price,
                                                            //         row.department,
                                                            //         row.projectstatus,
                                                            //         row.username,
                                                            //         row.year,
                                                            //         row.date
                                                            //     );
                                                            // }}
                                                        />
                                                        <DeleteIcon
                                                            style={{
                                                                fontSize: "20px",
                                                                color: "darkred",
                                                                cursor: "pointer",
                                                            }}
                                                            // onClick={() => {
                                                            //     deleteUser(row.id);
                                                            // }}
                                                        />
                                                    </Stack>
                                                </TableCell>
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
        </>
    )
}


