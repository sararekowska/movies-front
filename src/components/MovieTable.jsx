import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));

function MovieTable({ data }) {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        onChange={(x) => {
          setSearch(x.target.value);
        }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Year</StyledTableCell>
              <StyledTableCell>Director</StyledTableCell>
              <StyledTableCell>Genre</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .filter((movie) => {
                if (search === "") {
                  return movie;
                } else if (
                  movie.tytul.toLowerCase().includes(search.toLowerCase())
                ) {
                  return movie;
                }
              })
              .map((movie) => {
                return (
                  <TableRow>
                    <TableCell>{movie.tytul}</TableCell>
                    <TableCell>{movie.rok}</TableCell>
                    <TableCell>{movie.rezyser}</TableCell>
                    <TableCell>{movie.gatunek}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MovieTable;
