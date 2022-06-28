import React, { useEffect } from "react";
import {Bar} from 'react-chartjs-2';
import { Chart, registerables} from 'chart.js';
Chart.register(...registerables);

function Graph({data}) {

  if(data) {
    const fulldata = {
      labels: data.data.x,
      datasets: [{
        label: 'My First Dataset',
        data: data.data.y,
        barThickness: 1,
        borderColor: 'pink'

      }]
    }


    return(
      <div>
        <Bar
          data={fulldata} 
        />

      </div>
    );
  } else {
    return;
  }

}

// function Graph({ data }) {
//   const generateGraph = () => {
//     return new Dygraph(document.getElementById("graph"), data, {
//       legend: "always",
//       xlabel: "Wavenumber (cm-1)",
//       ylabel: "Absorbance(-In(I/IO))"
//     });
//   };

//   useEffect(() => {
//     if (data) {
//       generateGraph();
//     }
//   });

//   return <div id="graph"></div>;
// }

export default Graph;
