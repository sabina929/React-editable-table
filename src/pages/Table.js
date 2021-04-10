import React, { useContext } from 'react';

import {EmployeesContext} from '../context/EmployeesContext'
import EmpoleyeesDataModal from '../components/EmployeesDataModal'
import EditableTableCell from '../components/EditableTableCell'
import Pagination from '../components/Pagination'
import Search from '../components/Search'

function Table() {

const {employees,isModalOpened,updatedAndDeletedEmployees,deleteEmployee,showModal,resetData,handleEmployeeTableCell, currentEmployees, employeesPerPage, currentPage, paginate, searchTerm, handleChange} = useContext(EmployeesContext)

  return (
    <main>
        <Search searchTerm={searchTerm} handleChange={handleChange}/>
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
                            currentEmployees.map((employee) => 
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
                {
                    searchTerm ? null :<Pagination employeesPerPage={employeesPerPage} employees={employees} currentPage={currentPage} paginate={paginate}/> 
                }
                
            </article>
            <article className="btns-container">
                {/* <form action='#' onSubmit={handleSubmit}> */}
                    <button type='button' onClick={showModal}>Submit data</button>
                {/* </form> */}
                <button type='button' onClick={resetData}>Reset data</button>
            </article>
            
        </section>

            {
                isModalOpened &&  <EmpoleyeesDataModal updatedAndDeletedEmployees={updatedAndDeletedEmployees} showModal={showModal}/>
            }
   
    </main>
    )
}

export default Table;
