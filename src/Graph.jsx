import React from "react";
import Dygraph from "dygraphs";

function Graph({ data }) {
  const generateGraph = () => {
    return new Dygraph(document.getElementById("graph"), data, {
      legend: "always",
      xlabel: "Wavenumber (cm-1)",
      ylabel: "Absorbance(-In(I/IO))"
    });
  };

  useEffect(() => {
    if (data) {
      generateGraph();
    }
  });

  return <div id="graph"></div>;
}

export default Graph;
