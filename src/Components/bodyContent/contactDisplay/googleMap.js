import React, { useEffect } from "react";

function GoogleMap({ lat, lng }) {
  useEffect(() => {
    const ifameData = document.getElementById("iframeId");
    ifameData.src = `https://maps.google.com/maps?q=${lat},${lng}&hl=es;&output=embed`;
  });
  return (
    <div>
      <iframe id="iframeId" height="5px" width="10%"></iframe>
    </div>
  );
}
export default GoogleMap;
