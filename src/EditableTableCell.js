import React from 'react'

const EditableTableCell = ({cellData, onProductTableUpdate}) => {
    return (
        <td>
        <input type='text' name={cellData.type} id={cellData.id} value={cellData.value} onChange={onProductTableUpdate}/>
      </td>
    )
}

export default EditableTableCell
