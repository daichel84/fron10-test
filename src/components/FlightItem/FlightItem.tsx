import React from "react";

function FlightItem() {
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
            <select
              className="form-select border-0 hide-icon-select"
              aria-label="Default select example"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
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
            <select
              className="form-select border-0"
              aria-label="Default select example"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="col">
          <div className="input-group mb-3">
            <button
              className="btn btn-outline-secondary disabled border-0"
              type="button"
              id="button-addon1"
            >
              <i className="bi bi-calendar3"></i>
            </button>
            <select
              className="form-select border-0"
              aria-label="Default select example"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="col border-0">
          <div className="input-group mb-3">
            <button
              className="btn btn-outline-secondary disabled border-0"
              type="button"
              id="button-addon1"
            >
              <i className="bi bi-calendar3"></i>
            </button>
            <select
              className="form-select border-0"
              aria-label="Default select example"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
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
