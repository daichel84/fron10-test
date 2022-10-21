import React from "react";
import FlightItem from "../FlightItem/FlightItem";
import SimpleSelects from "../SimpleSelects/SimpleSelects";
import "./Flight.css";

const Flight = () => {
  return (
    <div>
      <div className="container p-4">
        <div className="row row-space">
          <div>
            <h1> Search hundreds of travel sites at Once</h1>
          </div>
        </div>
        <SimpleSelects/>
        <FlightItem/>
      </div>
    </div>
  );
};

export default Flight;
