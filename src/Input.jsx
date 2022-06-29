import React from "react";

function Input({ params, setParams }) {
  return (
    <div id="input-div">
      <label htmlFor="database">Database</label>
      <select
        id="database"
        defaultValue={params.database}
        onChange={(e) => setParams({ ...params, database: e.target.value })}
      >
        <option value="hitran">HITRAN</option>
        <option value="geisa">GEISA</option>
      </select>

      <label htmlFor="mode">Mode</label>
      <select
        id="mode"
        defaultValue={params.mode}
        onChange={(e) => setParams({ ...params, mode: e.target.value })}
      >
        <option value="absorbance">Absorbance</option>
        <option value="radiance">Radiance</option>
        <option value="transmittance">Transmittance</option>
      </select>

      <label htmlFor="min-range">
        Wavenumber MIN range (cm<sup>-1</sup>)
      </label>
      <input
        id="min-range"
        type="number"
        defaultValue={params.min_wavenumber_range}
        min={500}
        max={10000}
        onChange={(e) =>
          setParams({ ...params, min_wavenumber_range: e.target.value })
        }
      ></input>

      <label htmlFor="max-range">
        Wavenumber MAX range (cm<sup>-1</sup>)
      </label>
      <input
        id="max-range"
        type="number"
        defaultValue={params.max_wavenumber_range}
        min={500}
        max={10000}
        onChange={(e) =>
          setParams({ ...params, max_wavenumber_range: e.target.value })
        }
      ></input>

      <label htmlFor="tgas">Tgas (K)</label>
      <input
        id="tgas"
        type="number"
        defaultValue={params.tgas}
        onChange={(e) => setParams({ ...params, tgas: e.target.value })}
      ></input>

      <label htmlFor="pressure">Pressure (Bar)</label>
      <input
        id="pressure"
        type="number"
        defaultValue={params.pressure}
        onChange={(e) => setParams({ ...params, pressure: e.target.value })}
      ></input>

      <label htmlFor="path">Path length (cm)</label>
      <input
        id="path"
        type="number"
        defaultValue={params.path_length}
        onChange={(e) => setParams({ ...params, path_length: e.target.value })}
      ></input>

      <label htmlFor="molecule">HITRAN 2020 Molecule</label>
      <select
        id="molecule"
        defaultValue={params.molecule}
        onClick={(e) => setParams({ ...params, molecule: e.target.value })}
      >
        <option value="CO">CO</option>
      </select>

      <label htmlFor="mole">Mole Fraction</label>
      <input
        id="mole"
        type="number"
        defaultValue={params.species[0].mole_fraction}
        onClick={(e) => setParams({ ...params, mole_fraction: e.target.value })}
      ></input>
    </div>
  );
}

export default Input;