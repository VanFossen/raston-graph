import React from "react";

function Input() {
  return (
    <div id="input-div">
      <label for="database">Database</label>
      <select name="database" id="database">
        <option value="hitran">HITRAN</option>
      </select>

      <label for="mode">Mode</label>
      <select name="mode" id="mode">
        <option value="absorbance">Absorbance</option>
      </select>

      <label for="min-range">
        Wavenumber MIN range (cm<sup>-1</sup>)
      </label>
      <input
        name="min-range"
        id="min-range"
        type="number"
        value={1900}
        min={500}
        max={10000}
      ></input>

      <label for="max-range">
        Wavenumber MAX range (cm<sup>-1</sup>)
      </label>
      <input
        name="max-range"
        id="max-range"
        type="number"
        value={2300}
        min={500}
        max={10000}
      ></input>

      <label for="tgas">Tgas (K)</label>
      <input name="tgas" id="tgas" type="number" value={300}></input>

      <label for="pressure">Pressure (Bar)</label>
      <input
        name="pressure"
        id="pressure"
        type="number"
        value={1.01325}
      ></input>

      <label for="path">Path length (cm)</label>
      <input name="path" id="path" type="number" value={1}></input>

      <label for="molecule">HITRAN 2020 Molecule</label>
      <select name="molecule" id="molecule">
        <option value="CO">Absorbance</option>
      </select>

      <label for="mole">Mole Fraction</label>
      <input name="mole" id="mole" type="number" value={0.1}></input>
    </div>
  );
}

export default Input;
