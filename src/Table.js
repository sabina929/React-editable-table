import React, { useContext } from 'react';

import {EmployeesContext} from './EmployeesContext'
import EmpoleyeesDataModal from './EmployeesDataModal.js'
import EditableTableCell from './EditableTableCell'

function Table() {

const {employees,isModalOpened,deleteEmployee,showModal,handleEmployeeTableCell} = useContext(EmployeesContext)

  return (
    <main>
      <section className="container">
            <h1>Employees Table</h1>

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
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                            employees.map((employee) => 
                            {
                                const {id, name, surname, dateOfBirth, position, phoneNumber, isDeleted, inputId} = employee
                                // console.log(id, name, surname, dateOfBirth, position, phoneNumber, isDeletedç inputId)
                                return(
                                <tr key={inputId} className={`status ${isDeleted ? 'deleted' : 'not-deleted'}`}>
                                    <EditableTableCell handleEmployeeTableCell={handleEmployeeTableCell} cellAttrs={{
                                    "type": "id",
                                    value: id,
                                    id: `${inputId}input1`
                                    }}/>
                                    <EditableTableCell handleEmployeeTableCell={handleEmployeeTableCell} cellAttrs={{
                                    "type": "name",
                                    value: name,
                                    id: `${inputId}input2`
                                    }}/>
                                    <EditableTableCell handleEmployeeTableCell={handleEmployeeTableCell} cellAttrs={{
                                    "type": "surname",
                                    value: surname,
                                    id: `${inputId}input3`
                                    }}/>
                                    <EditableTableCell handleEmployeeTableCell={handleEmployeeTableCell} cellAttrs={{
                                    "type": "dateOfBirth",
                                    value: dateOfBirth,
                                    id: `${inputId}input4`
                                    }}/>
                                    <EditableTableCell handleEmployeeTableCell={handleEmployeeTableCell} cellAttrs={{
                                    "type": "position",
                                    value: position,
                                    id: `${inputId}input5`
                                    }}/>
                                    <EditableTableCell handleEmployeeTableCell={handleEmployeeTableCell} cellAttrs={{
                                    "type": "phoneNumber",
                                    value: phoneNumber,
                                    id: `${inputId}input6`
                                    }}/>
                                    <td className={`status ${isDeleted ? 'deleted' : 'not-deleted'}`}><span>{isDeleted ? 'deleted' : '.............'}</span></td>
                                    <td>
                                    {
                                        isDeleted ? <i className="fas fa-trash-restore" onClick={()=>deleteEmployee(inputId)}></i> : <i className="fas fa-trash" onClick={()=>deleteEmployee(inputId)}/>
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

export default Table;
