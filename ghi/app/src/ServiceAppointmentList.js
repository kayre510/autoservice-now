import React from 'react';
import { Link } from "react-router-dom";
import './index.css';

class ServiceAppointmentList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            appointments: [],
        }
        this.fetchAppointments = this.fetchAppointments.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.fetchAppointments();
    }

    async handleDelete(id){
        const serviceUrl = `http://localhost:8080/api/appointments/${id}/`;
        const fetchConfig = {
          method: "delete",
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(serviceUrl, fetchConfig);
        if (response.ok) {
          const deleteService = await response.json();
          this.fetchAppointments();
        }
    }

    async fetchAppointments() {
        const response = await fetch('http://localhost:8080/api/appointments/')
        if (response.ok) {
            const data = await response.json()
            this.setState({appointments: data.appointments})
        }
    }

    render() {
        return (
            <>
                < br/>
            <div id="heading">
                <h1>All Appointments</h1>
                <Link to="/appointments/new">
                <button id="addbutton" className="btn btn-success">Create an Appointment</button>
                </Link>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Customer name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                        <th>Cancel</th>
                        <th>Finished</th>
                        <th>VIP</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.appointments.map(appointment => {
                        let vip = ""
                        if(appointment.purchased === true){
                            vip = "Yes"
                        } else {
                            vip = "No"
                        }
                        return (
                            <tr key={appointment.id}>
                                <td>{appointment.vin}</td>
                                <td>{appointment.owner_name}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.time}</td>
                                <td>{appointment.technician.name}</td>
                                <td>{appointment.reason}</td>
                                <td><button onClick={() => this.handleDelete(appointment.id)} className="btn btn-danger">Cancel</button></td>
                                <td><button onClick={() => this.handleDelete(appointment.id)} className="btn btn-success">Finished</button></td>
                                <td>{vip}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
    }
}

export default ServiceAppointmentList;
