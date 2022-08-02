// import { version } from "react-dom";

import React, {Component} from "react";
import EmployeesService from "../services/EmployeesService";
import WithNavigateService  from "../services/WithNavigateService";
import WithRouterService from "../services/WithRouterService";

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // this.props.match.params.id does not work because react version is v6, so insted i use:
            id: this.props.params.id,
            firstName: "",
            lastName: "",
            emailId: ""
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount() {
        EmployeesService.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;

            //if some field in red.data is null, then set it to empty string
            if(employee.firstName == null) employee.firstName = "";
            if(employee.lastName == null) employee.lastName = "";
            if(employee.emailId == null) employee.emailId = "";

            this.setState({firstName: employee.firstName, lastName: employee.lastName, emailId: employee.emailId});
        }
        );
    }


    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }
    changeEmailIdHandler = (event) => {
        this.setState({emailId: event.target.value});
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee ===> ', JSON.stringify(employee));

        EmployeesService.updateEmployee(employee, this.state.id).then((res) => {
            this.props.navigate("/employees");
        }
        );
        // EmployeesService.createEmployee(employee).then((res) => {
        //     this.props.navigate("/employees");
        // }
        // );
    

    }

    cancel(){
        this.props.navigate("/employees");
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">Update Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input placeholder="First Name" name ="firstName" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input placeholder="Last Name" name ="lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Id</label>
                                        <input placeholder="Email Id" name ="emailId" className="form-control"
                                            value={this.state.emailId} onChange={this.changeEmailIdHandler} />
                                    </div>
                               
                                    <button className="btn btn-primary" onClick={this.updateEmployee}>Update Employee</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                    

                               </form>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WithRouterService(WithNavigateService(UpdateEmployeeComponent));