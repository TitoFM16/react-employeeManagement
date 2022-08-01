import React, {Component} from "react";
import EmployeesService from "../services/EmployeesService";
import WithNavigateService  from "../services/WithNavigateService";



class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: []
        };

        
        
        this.addEmployee = this.addEmployee.bind(this);
    }
    

    componentDidMount() {
        EmployeesService.getEmployees().then((res) => {
            this.setState({employees: res.data});
        });
    }
    addEmployee() {
              
        this.props.navigate("/add-employee");
    }
    render() {
        
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <div className="col-4">
                        <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                    </div>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>         
                        <tbody>
                            {
                            this.state.employees.map(
                                employee => (
                                <tr key={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                </tr>
                            ))
                            }


                        </tbody>           
                    </table> 
                </div>
                {/* {this.state.isLoading ? <p>Loading...</p> : this.renderEmployeeList()} */}
            </div>
        );
    }
}

export default WithNavigateService(ListEmployeeComponent);