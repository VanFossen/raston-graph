import React from "react";

function MaxWave({ params, setParams }) {
  return (
    <div class="input">
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
    </div>
  );
}

export default MaxWave;
