import { useState } from "react";
import "./App.css";
import Fetch from "./Fetch";
import Graph from "./Graph";

function App() {
  const [data, setData] = useState("");

  return (
    <div className="App">
      <Fetch setData={setData} />
      <Graph data={data} />
    </div>
  );
}

export default App;
