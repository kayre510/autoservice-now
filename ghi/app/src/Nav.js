import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
{/* ---------- INVENTORY ---------- */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles">Automobiles</NavLink>
            </li>
            <li className="nav-item"></li>
              <NavLink className="nav-link" to="/manufacturers">Manufacturers</NavLink>
            <li className="nav-item"></li>
              <NavLink className="nav-link" to="/models">Vehicle Models</NavLink>
            <li className="nav-item"></li>
{/* ---------- SERVICE ---------- */}
              <NavLink className="nav-link" to="/service">All Appointments</NavLink>
              <NavLink className="nav-link" to="/technicians/new">Create Technician</NavLink>
            <li className="nav-item"></li>
{/* ---------- SALES ---------- */}
            <li className="nav-item"></li>
              <NavLink className="nav-link" to="/sales">All Sales</NavLink>
              <li className="nav-item"></li>
              <NavLink className="nav-link" to="/salespeople">Sales Person History</NavLink>
              <NavLink className="nav-link" to="/sales/new">Create Sale Record</NavLink>
              <li className="nav-item"></li>
              <NavLink className="nav-link" to="/salespeople/new">Add Sales Person</NavLink>
            <li className="nav-item"></li>
              <NavLink className="nav-link" to="/customers/new">Add Customer</NavLink>
            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
