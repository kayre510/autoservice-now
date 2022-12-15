// import { NavLink } from 'react-router-dom';

// function Nav() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//       <div className="container-fluid">
//         <NavLink className="navbar-brand" to="/">CarCar</NavLink>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/">Home</NavLink>
//             </li>
// {/* ---------- INVENTORY ---------- */}
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/manufacturers">Manufacturers</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/manufacturers/new">Create Manufacturer</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/models">Vehicle Models</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/models/new">Create Vehicle Model</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/automobiles">Automobiles</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/automobiles/new">Create Automobile</NavLink>
//             </li>
// {/* ---------- SERVICE ---------- */}
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/technicians/new">Create Technician</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/appointments">All Appointments</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/service/vin">Service History</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="appointments/new">New Service Appointment</NavLink>
//             </li>
// {/* ---------- SALES ---------- */}
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/salespeople/new">Add Sales Person</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/customers/new">Add Customer</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/sales">All Sales</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/salespeople">Sales Person History</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/sales/new">Create Sale Record</NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Nav;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import './index.css'


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
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item dropdown">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic-button">
                  Inventory
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <NavLink className="nav-link" id="word-color" to="/manufacturers">Manufacturers</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink className="nav-link" id="word-color" to="/manufacturers/new">Create Manufacturer</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink className="nav-link" id="word-color" to="/models">Vehicle Models</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink className="nav-link" id="word-color" to="/models/new">Create Vehicle Model</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink className="nav-link" id="word-color" to="/automobiles">Automobiles</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink className="nav-link" id="word-color" to="/automobiles/new">Create Automobile</NavLink>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
{/* Other links go here */}
            <li className="nav-item dropdown">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic-button">
                  Sales Department
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <NavLink className="nav-link" id="word-color" to="/salespeople/new">Add Sales Person</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink className="nav-link" id="word-color" to="/customers/new">Add Customer</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink className="nav-link" id="word-color" to="/sales">All Sales</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink className="nav-link" id="word-color" to="/salespeople">Sales Person History</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink className="nav-link" id="word-color" to="/sales/new">Create Sale Record</NavLink>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item dropdown">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic-button">
                  Service Department
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <NavLink className="nav-link" id="word-color" to="/technicians/new">Create Technician</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink className="nav-link" id="word-color" to="/appointments">All Appointments</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink className="nav-link" id="word-color" to="appointments/new">New Service Appointment</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink className="nav-link" id="word-color" to="/service/vin">Service History</NavLink>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
