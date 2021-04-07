import React from 'react'

const EmployeesDataModal = ({employees, showModal}) => {
    return (
        <section className='modal-container'>
        
        <article className='background' onClick={showModal}></article>
        <article className='modal'>
          <div>
          <code>
            {JSON.stringify(employees)}
          </code>
          </div>
        </article>

        <i className="fas fa-times" onClick={showModal}></i>
      </section>
    )
}

export default EmployeesDataModal
