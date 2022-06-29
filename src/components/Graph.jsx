import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

function Graph({ data }) {

  if (data) {
    const fulldata = {
      labels: data.data.x,
      datasets: [
        {
          label: "",
          data: data.data.y,
          barThickness: 1,
          backgroundColor: "purple",
          borderColor: "hsl(30,88%,69%)",
        },
      ],
    };

    const options = {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          type: "linear",
          title: {
            display: true,
            text: "Wavenumber cm-1",
          },
        },
        y: {
          title: {
            display: true,
            text: "Absorbance (-ln(I/IO))",
          },
        },
      },
    };

    return (
      <div>
        <Line height={"600"} width={"1000"} data={fulldata} options={options} />
      </div>
    );
  } else {
    return;
  }
}

export default Graph;
