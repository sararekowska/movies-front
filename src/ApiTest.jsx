import { useState, useEffect } from "react";
import MovieTable from "./components/MovieTable";

function ApiTest() {
  const fetchApi = () => {
    fetch("http://localhost/api.php")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  return <MovieTable data={data} />;
}

export default ApiTest;
