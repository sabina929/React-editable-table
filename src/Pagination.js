import React from 'react'

const Pagination = ({employeesPerPage, employees, currentPage, paginate}) => {

    // const {employeesPerPage, employees, currentPage, paginate} = this.props;
    const pageNumbers = [];
    // const totalBooks = employeesPerPage.length;
    // console.log(books)
    // console.log(totalBooks)
    // console.log(booksPerPage)
    const totalBooks = employees.length;
    for (let i = 1; i <= Math.ceil(totalBooks / employeesPerPage); i++) {
          pageNumbers.push(i);
        }
    return (
        <div className="pagination">
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
        </div>
    )
}

export default Pagination
