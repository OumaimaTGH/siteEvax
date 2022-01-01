import React from "react";
import { AppMajInscription } from "../Components/inscription/maj_inscription/maj_inscription";

function majInscription() {
  return (
    <div className="name">
      <div
        style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px 0px 10px 0px" }}
      >
        <AppMajInscription />
      </div>
    </div>
  );
}
export default majInscription;
