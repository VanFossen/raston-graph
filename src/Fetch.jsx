import React from "react";

function Fetch({ setData }) {
  async function fetchRadis() {
    let response = await fetch("https://api.radis.app/calculate-spectrum", {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/json;charset=UTF-8",
        pragma: "no-cache",
        "sec-ch-ua":
          '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
      },
      referrer: "https://www.radis.app/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: '{"species":[{"molecule":"CO","mole_fraction":0.1}],"min_wavenumber_range":1900,"max_wavenumber_range":2300,"tgas":300,"tvib":null,"trot":null,"pressure":1.01325,"path_length":1,"simulate_slit":false,"mode":"absorbance","database":"hitran"}',
      method: "POST",
      mode: "cors",
      credentials: "omit",
    });

    let data = await response.text();
    let dataObject = JSON.parse(data);

    let finalData = "";
    if (dataObject.data.x.length === dataObject.data.y.length) {
      console.log("X and Y are the same length!");
      console.log(
        "  X: " + dataObject.data.x.length + "   Y: " + dataObject.data.y.length
      );
    } else {
      console.log("X and Y are not the same length!");
    }

    for (let i = 0; i < dataObject.data.x.length; i++) {
      finalData += dataObject.data.x[i] + "\t" + dataObject.data.y[i] + "\r\n";
    }

    setData(finalData);
  }

  return <button onClick={fetchRadis}>Perform Fetch Request</button>;
}

export default Fetch;
