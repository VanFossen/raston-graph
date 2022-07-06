import { useState } from "react";
import "./App.css";
import Fetch from "./components/Fetch";
import Form from "./components/Form";
import Spinner from "./components/Spinner";
import Error from "./components/Error";
import Plotly from "./components/graphs/Plotly";

function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  /**
   * Default Radis App Values
   *   species: [{ molecule: "CO", mole_fraction: 0.1 }]
   *   min_wavenumber_range: 1900
   *   max_wavenumber_range: 2300
   *   tgas: 300
   *   tvib: null
   *   trot: null
   *   pressure: 1.01325
   *   path_length: 1
   *   simulate_slit: false
   *   mode: "absorbance"
   *   database: "hitran"
   */
  const [params, setParams] = useState({
    species: [{ molecule: "CO", mole_fraction: 1 }],
    min_wavenumber_range: 1900,
    max_wavenumber_range: 2300,
    tgas: 294.15,
    tvib: null,
    trot: null,
    pressure: 0.0001,
    path_length: 10,
    simulate_slit: false,
    mode: "transmittance_noslit",
    database: "hitran",
  });

  return (
    <div className="App">
      <Form params={params} setParams={setParams} />
      <Fetch
        params={params}
        setData={setData}
        setLoading={setLoading}
        setError={setError}
      />
      {loading && <Spinner />}
      {error && <Error />}

      {!loading && <Plotly data={data} params={params} />}
    </div>
  );
}

export default App;
