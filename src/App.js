import { useState } from "react";
import "./App.css";
import Fetch from "./Fetch";
import Graph from "./Graph";
import Input from "./Input";
import Spinner from "./Spinner";

function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState({
    species: [{ molecule: "CO", mole_fraction: 0.1 }],
    min_wavenumber_range: 1900,
    max_wavenumber_range: 2300,
    tgas: 300,
    tvib: null,
    trot: null,
    pressure: 1.01325,
    path_length: 1,
    simulate_slit: false,
    mode: "absorbance",
    database: "hitran",
  });

  return (
    <div className="App">
      <Input params={params} setParams={setParams} />
      <Fetch params={params} setData={setData} setLoading={setLoading} />
      {loading && <Spinner />}
      <Graph data={data} setLoading={setLoading}/>
    </div>
  );
}

export default App;
