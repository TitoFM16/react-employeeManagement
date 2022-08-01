import React, {Component} from "react";
import WithNavigateService  from "../services/WithNavigateService";

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            emailId: ""
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
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
    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {firsName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee ===> ', JSON.stringify(employee));

        // EmployeesService.saveEmployee(this.state).then((res) => {
        //     this.props.navigate("/list-employee");
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
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input placeholder="First Name" name ="firstName" className="form-control"
                                            value={this.state.firsName} onChange={this.changeFirstNameHandler} />
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
                               
                                    <button className="btn btn-primary" onClick={this.saveEmployee}>Add Employee</button>
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

export default WithNavigateService(CreateEmployeeComponent);