import React from 'react'

function SimpleSelects() {
  return (
    <div className="row d-flex flex-row">
    <div className="col-sm-2">
      <select
        className="form-select border-0"
        aria-label="Default select example"
      >
        <option defaultValue="0">Ida</option>
        <option value="1">Ida y Vuelta</option>
        <option value="2">Multi-destino</option>
        <option value="3">Generador de viajes</option>
      </select>
    </div>

    <div className="col-sm-2">
      <select
        className="form-select border-0"
        aria-label="Default select example"
      >
        <option defaultValue="0">Adultos</option>
        <option value="1">Estudiantes</option>
        <option value="2">Jóvenes</option>
        <option value="3">Niños</option>
        <option value="3">Bebe en asiento</option>
        <option value="3">Bebe en regazo</option>
      </select>
    </div>
    <div className="col-sm-2">
      <select
        className="form-select border-0"
        aria-label="Default select example"
      >
        <option defaultValue="0">Económica</option>
        <option value="1">Econónica Premiun</option>
        <option value="2">Negocios</option>
        <option value="3">Primera</option>
        <option value="3">Mixta</option>
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
