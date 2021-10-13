import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "title", headerName: "Title", width: 200 },
  { field: "year", headerName: "Year", width: 130 },
  { field: "director", headerName: "Director", width: 160 },
  { field: "genre", headerName: "Genre", width: 130, sortable: false },
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
        rows={data.map((movie) => {
          return {
            id: movie.id,
            title: movie.tytul,
            year: movie.rok,
            director: movie.rezyser,
            genre: movie.gatunek,
          };
        })}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}

export default MovieTable;
