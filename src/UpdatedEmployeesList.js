import React, { useState, useEffect, useCallback } from 'react';

const UpdatedEmployeesList = ({employees}) => {
    const [updatedEmployees, setUpdatedEmployees] = useState([])
  
    const getNotDeletedEmployees = useCallback( () => {
      const notDeletedEmployees = employees.filter(updatedEmployee=> updatedEmployee.isDeleted !== true)
        setUpdatedEmployees(notDeletedEmployees)
    }, [employees])
  
    useEffect(() => {
        getNotDeletedEmployees()
    }, [employees, getNotDeletedEmployees])

    return (
        <section className='updated-list-container'>
            <p>Updated employees</p>
          {
             updatedEmployees.length === 0 ? 'Nothing here...' : updatedEmployees.map(updatedEmployee =>{
                const {id, name, surname, dateOfBirth, position, phoneNumber, inputId} = updatedEmployee
                  return (
                      <div key={inputId}>
                          <h2>{name} {surname}</h2>
                          <h3>{position}</h3>
                          <div>
                              <p>id: {id}</p>
                              <p>dateOfBirth: {dateOfBirth}</p>
                              <p>phoneNumber: {phoneNumber}</p>
                          </div>
                      </div>
                  )
              })
          }
        </section>
    )
}

export default UpdatedEmployeesList
