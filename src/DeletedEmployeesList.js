import React, { useContext }  from 'react'
import {EmployeesContext} from './EmployeesContext'

const DeletedEmployeesList = () => {
    const {deletedEmployees} = useContext(EmployeesContext)
    return (
        <main>
            <section className='list-container'>
                <h1>Deleted employees</h1>
                <article>

                    {
                        deletedEmployees.length === 0 ? <p>Nothing here...</p> :  deletedEmployees.map(deletedEmployee =>{
                            const {id, name, surname, dateOfBirth, position, phoneNumber, inputId} = deletedEmployee
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

export default DeletedEmployeesList
