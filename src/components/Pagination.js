import React from 'react'

const Pagination = ({employeesPerPage, employees, currentPage, paginate}) => {
    const pageNumbers = [];
    const totalBooks = employees.length;
    for (let i = 1; i <= Math.ceil(totalBooks / employeesPerPage); i++) {
          pageNumbers.push(i);
    }

    return (
        <article className="pagination-container">
            <ul>
                {
                    pageNumbers.length === 0 ? <li className="selected" onClick={() => paginate(1)}><div>1</div></li> : null
                }
                
                {
                    pageNumbers.map(pageNumber => {
                        return (
                        <li key={pageNumber} className={pageNumber === currentPage ? "selected" : null} onClick={() => paginate(pageNumber)}><div>{pageNumber}</div></li>
                    )
                })
                }
            </ul>
        </article>
    )
}

export default Pagination
