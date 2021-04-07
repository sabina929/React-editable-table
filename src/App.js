import React, { useState, useEffect } from 'react';
import data from './data';
import './App.css';

import EmpoleyeesDataModal from './EmployeesDataModal.js'


function App() {
  // let copyOfData = [...data]
  const [employees, setEmployees] = useState(data)
  const [deletedEmployees, setDeletedEmployees] = useState([])
  const [isModalOpened, setIsModalOpened] = useState(false)

  const deleteEmployee = (id) =>{
    let tempEmployees = [...employees];
    // const deletedEmployee = employees.find(employee=> employee.id ===id)
    const filteredEmployees = employees.filter(employee=> employee.id !==id)

    setDeletedEmployees(filteredEmployees)

    const mappedEmployees = tempEmployees.map(employee => {
      if(employee.id === id){
        if(employee.isDeleted){
          employee.isDeleted = false;
        }
        else if(!employee.isDeleted){
          employee.isDeleted = true;
        }
      }
      return employee
    })

    console.log(mappedEmployees)
    

    setEmployees(mappedEmployees)
    
  }

  const showModal = ()=> {
    setIsModalOpened(!isModalOpened)
  }
  useEffect(() => {
    console.log(data)
  })
  return (
    <main>
      <section className="container">
        <h1>Employees Table</h1>
        <article>
          <div>Updated Employees</div>
          <div deletedEmployees={deletedEmployees}>Deleted Employees</div>
        </article>

        <article className="table-container">
            <table id="employees">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Date of birth</th>
                    <th>Position</th>
                    <th>Phone number</th>
                    {/* <th>Status</th> */}
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                        employees.map((item) => 
                          {
                            const {id, name, surname, dateOfBirth, position, phoneNumber, isDeleted} = item
                            // console.log(id, name, surname, dateOfBirth, position, phoneNumber, isDeleted)
                            return(
                              <tr key={id} className={`status ${isDeleted ? 'deleted' : 'not-deleted'}`}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{surname}</td>
                                <td>{dateOfBirth}</td>
                                <td>{position}</td>
                                <td>{phoneNumber}</td>
                                <td>
                                  {
                                    isDeleted ? <i className="fas fa-trash-restore" onClick={()=>deleteEmployee(id)}></i> : <i className="fas fa-trash" onClick={()=>deleteEmployee(id)}/>
                                  }
                                   
                                </td>
                                
                            </tr>
                            )
                          }
                        )
                    }
                </tbody>
            </table>
        </article>

        <button type='button' onClick={showModal}>Submit data</button>
      </section>

{
  isModalOpened &&  <EmpoleyeesDataModal employees={employees} showModal={showModal}/>
}
   
    </main>
    )
}

export default App;
