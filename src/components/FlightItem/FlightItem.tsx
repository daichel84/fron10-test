import React, { useLayoutEffect, useRef } from "react";
import SelectPreaty from "./Select/SelectPreaty";

function FlightItem() {
  const pick1 = useRef(null);
  const pick2 = useRef(null);

  useLayoutEffect(() => {
    // 👇️ use a ref (best)
    if(pick1.current && pick2.current){  
      (pick1.current as HTMLInputElement).valueAsDate = new Date();
      (pick2.current as HTMLInputElement).valueAsDate = new Date();
    }
  
  },[])

  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="input-group mb-3">
            <button
              className="btn btn-outline-secondary disabled border-0"
              type="button"
              id="button-addon1"
            >
              <i className="bi bi-airplane-fill"></i>
            </button>
            <div className="col border-0 hide-icon-select">
          <SelectPreaty/>
        </div>
          </div>
        </div>
        <div className="col-auto">
          <button className="btn btn-outline-secondary border-0">
            <i className="bi bi-arrow-left-right"></i>
          </button>
        </div>
        <div className="col">
          <div className="input-group mb-3">
            <button
              className="btn btn-outline-secondary disabled border-0"
              type="button"
              id="button-addon1"
            >
              <i className="bi bi-airplane-fill"></i>
            </button>
            <div className="col border-0 hide-icon-select">
          <SelectPreaty/>
        </div>
          </div>
        </div>
        <div className="col">
          <div className="input-group mb-3">
          <input type="date" className="border-0" ref={pick1}
              aria-label="Default select example" />
          </div>
        </div>
        <div className="col border-0">
          <div className="input-group mb-3">
           
           <input type="date" className="border-0" ref={pick2}
              aria-label="Default select example" />
          </div>
        </div>
 
        <div className="col-auto">
          <button className="btn btn-primary">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlightItem;
