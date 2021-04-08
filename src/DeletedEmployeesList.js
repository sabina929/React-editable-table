import React from 'react'

const DeletedEmployeesList = ({deletedEmployees}) => {
    return (
        <section className='deleted-list-container'>
            <p>Deleted employees</p>
          {
             deletedEmployees.length === 0 ? 'Nothing here...' :  deletedEmployees.map(deletedEmployee =>{
                const {id, name, surname, dateOfBirth, position, phoneNumber, inputId} = deletedEmployee
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

export default DeletedEmployeesList
