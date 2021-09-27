import { useState } from "react";

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

  return (
    <div>
      <button onClick={fetchApi}>list movies</button>
      <br />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default ApiTest;
