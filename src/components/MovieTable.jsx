import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { headerClassName: "header", field: "rok", headerName: "Year", width: 130 },
  {
    headerClassName: "header",
    field: "tytul",
    headerName: "Title",
    width: 280,
  },
  {
    headerClassName: "header",
    field: "rezyser",
    headerName: "Director",
    width: 160,
  },
  {
    headerClassName: "header",
    field: "gatunek",
    headerName: "Genre",
    width: 130,
    sortable: false,
  },
];

function MovieTable({ data }) {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        height: 400,
        width: "40%",
      }}
    >
      <DataGrid
        className="table"
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}

export default MovieTable;
