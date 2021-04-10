import React from 'react'

const EditableTableCell = ({cellAttrs, handleEmployeeTableCell, }) => {
    return (
        <td>
        <input type={cellAttrs.type} name={cellAttrs.name} id={cellAttrs.id} value={cellAttrs.value} rowid={cellAttrs.rowid} onChange={handleEmployeeTableCell}/>
      </td>
    )
}

export default EditableTableCell
