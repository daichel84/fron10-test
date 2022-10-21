import React from 'react'

function SimpleSelects() {
  return (
    <div className="row d-flex flex-row">
    <div className="col-sm-2">
      <select
        className="form-select border-0"
        aria-label="Default select example"
      >
        <option defaultValue="0">Round-trip</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>

    <div className="col-sm-2">
      <select
        className="form-select border-0"
        aria-label="Default select example"
      >
        <option defaultValue="0">Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div className="col-sm-2">
      <select
        className="form-select border-0"
        aria-label="Default select example"
      >
        <option defaultValue="0">Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div className="col-sm-2">
      <select
        className="form-select border-0"
        aria-label="Default select example"
      >
        <option defaultValue="0">Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>
  )
}

export default SimpleSelects
