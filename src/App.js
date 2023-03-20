import "./App.css";
import "normalize.css";

import NavBar from "./components/NavBar/NavBar";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { IoMdTrash } from "react-icons/io";
import { RiPencilFill } from "react-icons/ri";

function createData(no, created, validUntil, amount) {
  return { no, created, validUntil, amount };
}

const rows = [
  createData("02/22", "02/02/2022", "02/02/2023", 830),
  createData("03/22", "02/02/2022", "02/02/2023", 1000),
  createData("04/22", "02/02/2022", "02/02/2023", 20),
  createData("05/22", "02/02/2022", "02/02/2023", 9000),
];

const App = () => {
  return (
    <div class="container">
      <NavBar />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell align="right">Created</TableCell>
              <TableCell align="right">Valid Until</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.no}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.no}
                </TableCell>
                <TableCell align="right">{row.created}</TableCell>
                <TableCell align="right">{row.validUntil}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">
                  {" "}
                  <RiPencilFill />
                  <IoMdTrash />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default App;
