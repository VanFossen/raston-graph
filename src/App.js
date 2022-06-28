import { useState } from "react";
import "./App.css";
import Fetch from "./Fetch";
import Graph from "./Graph";
import Input from "./Input";

function App() {
  const [data, setData] = useState("");

  return (
    <div className="App">
      <Input />
      <Fetch setData={setData} />
      <Graph data={data} />
    </div>
  );
}

export default App;
