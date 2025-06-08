import React, {useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../Services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

   const [employees, setEmpoyees] = useState([])

   const navigator = useNavigate();

   useEffect(() => {
     getAllEmployees();
   }, [])

   function getAllEmployees(){
    listEmployees().then((response) => {
        setEmpoyees(response.data);
     }).catch(error => {
        console.error(error);
     })
   }

   function addNewEmployee(){
      navigator('/add-employee')
   }

   function updateEmployee(id) {
    navigator(`/edit-employee/${id}`)
   }

   function removeEmployee(id){
    console.log(id);

    deleteEmployee(id).then((response) =>{
      getAllEmployees();

    }).catch(error => {
      console.error(error);
    })
   }
    
  return (
    <div className="container py-4">
  <div className="card shadow-sm">
    <div className="card-body">
      <div className="d-flex justify-content-start align-items-center mb-3">
  <button className="btn btn-primary me-3" onClick={addNewEmployee}>
    + Add Employee
  </button>
  <div className='employee-header'>
  <h2 className="text-center flex-grow-1">List of Employees</h2>
  </div>
</div>

      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td className="text-center">
                  <button
                    className="btn btn-outline-primary btn-sm me-2"
                    onClick={() => updateEmployee(employee.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => removeEmployee(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

  )
}

export default ListEmployeeComponent