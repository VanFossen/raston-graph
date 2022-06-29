import React from "react";
import Database from "./inputs/Database";
import MaxWave from "./inputs/MaxWave";
import MinWave from "./inputs/MinWave";
import PathLength from "./inputs/PathLength";
import Pressure from "./inputs/Pressure";
import Tgas from "./inputs/Tgas";

function Input({ params, setParams }) {
  return (
    <div id="input-div">
      <Database params={params} setParams={setParams} />

      <MinWave params={params} setParams={setParams} />

      <MaxWave params={params} setParams={setParams} />

      <Tgas params={params} setParams={setParams} />

      <Pressure params={params} setParams={setParams} />

      <PathLength params={params} setParams={setParams} />

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
