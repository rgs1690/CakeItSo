import React from 'react'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <div className="navbar-brand">Cake It So!</div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">StartHere</a>
          </li>e
          <li className="nav-item">
            <a className="nav-link" href="/Cakes">Cakes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Customers">Customers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Events">Events</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/YourInfo">Your Info</a>
          </li>
        </ul>
        <button className="danger">LogOut</button>
      </div>
    </div>
  </nav>
  )
}
