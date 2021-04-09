import React, { useState, useEffect, useCallback, useContext } from 'react';
import {EmployeesContext} from '../context/EmployeesContext'

const UpdatedEmployeesList = () => {
    const {updatedEmployees} = useContext(EmployeesContext)

    const [updatedButNotDeletedEmployees, setUpdatedButNotDeletedEmployees] = useState([])
  
    const getNotDeletedEmployees = useCallback( () => {
      const notDeletedEmployees = updatedEmployees.filter(updatedEmployee=> updatedEmployee.isDeleted !== true)
      setUpdatedButNotDeletedEmployees(notDeletedEmployees)
    }, [updatedEmployees])
  
    useEffect(() => {
        getNotDeletedEmployees()
    }, [updatedEmployees, getNotDeletedEmployees])

    return (
        <main>

        <section className='list-container'>
            <h1>Updated employees</h1>
            <article>

                {
                    updatedButNotDeletedEmployees.length === 0 ? <p>Nothing here...</p> : updatedButNotDeletedEmployees.map(updatedEmployee =>{
                        const {id, name, surname, dateOfBirth, position, phoneNumber, inputId} = updatedEmployee
                        return (
                            <div key={inputId} className="employee">
                                <h2>{name} {surname}</h2>
                                <h3>{position}</h3>
                                <div>
                                    <p><span>ID:</span> {id}</p>
                                    <p><span>Date of birth:</span> {dateOfBirth}</p>
                                    <p><span>Phone number:</span> {phoneNumber}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </article>
        </section>
        </main>
    )
}

export default UpdatedEmployeesList
