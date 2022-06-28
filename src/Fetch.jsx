import React from "react";

function Fetch({ params, setData, setLoading }) {
  async function fetchRadis() {
    setLoading(true);

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
      body: JSON.stringify(params),
      method: "POST",
      mode: "cors",
      credentials: "omit",
    });

    let data = await response.text();
    let dataObject = JSON.parse(data);
    
    setData(dataObject);
  }

  return (
    <button id="button" onClick={fetchRadis}>
      Perform Fetch Request
    </button>
  );
}

export default Fetch;
