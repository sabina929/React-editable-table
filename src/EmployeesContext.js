import React, {createContext, useState, useEffect} from 'react'
import data from './data';

export const EmployeesContext = createContext()

const EmployeesContextProvider = (props) => {
    let copyOfData = JSON.parse(JSON.stringify(data))
    const [employees, setEmployees] = useState([...copyOfData])
    const [updatedEmployees, setUpdatedEmployees] = useState([])
    const [deletedEmployees, setDeletedEmployees] = useState([])
    const [isModalOpened, setIsModalOpened] = useState(false)
    const [updatedAndDeletedEmployees, setUpdatedAndDeletedEmployees] = useState({})

    const deleteEmployee = (inputId) =>{
        let tempEmployees = [...employees];
    
        const mappedEmployees = tempEmployees.map(employee => {
          if(employee.inputId === inputId){
            if(employee.isDeleted){
              employee.isDeleted = false;
            }
            else if(!employee.isDeleted){
              employee.isDeleted = true;
            }
          }
          return employee
        })

        const filteredEmployees = mappedEmployees.filter(employee=> employee.isDeleted === true)
        setDeletedEmployees(filteredEmployees)
        // console.log(mappedEmployees)
        // console.log(filteredEmployees)
        setEmployees(mappedEmployees)
      }
    
      const showModal = ()=> {
        setIsModalOpened(!isModalOpened)
        // let updatedAndDeletedEmployees = [...updatedEmployees,...deletedEmployees]
        let updatedAndDeletedEmployees = {
          updated: [...updatedEmployees],
          deleted: [...deletedEmployees]
        }
        // console.log(updatedAndDeletedEmployees)
        setUpdatedAndDeletedEmployees(updatedAndDeletedEmployees)
      }
      const resetData = ()=> {
        let copyOfData = JSON.parse(JSON.stringify(data))
        setEmployees(copyOfData)
        // const filteredEmployees = copyOfData.filter(employee=> employee.isDeleted === true)
        setDeletedEmployees([])
        setUpdatedEmployees([])
        
      }
    
      const handleEmployeeTableCell = (e) => {
        let str = e.target.id;
        let arr = str.split("");
        arr.splice(str.length - 6, str.length);
        let idStr = arr.join('');
    
        let item = {
          id: idStr,
          name: e.target.name,
          value: e.target.value
        };
        let copyOfEmployeesArr = employees.slice();
       
    
        let editedEmployees = copyOfEmployeesArr.map(employee=> {
          for (let key in employee) {
              if (key === item.name && employee.inputId === item.id) {
                employee[key] = item.value;
              }
          }
          return employee;
        });
        setEmployees(editedEmployees);
    
      };
    
    
      useEffect(() => {
        let copyOfDataArr = JSON.parse(JSON.stringify(data))
        let copyOfEmployeesArr = employees.slice();    
    
        const comparedEmloyeesArr = copyOfEmployeesArr.filter(employeeObj=>{
          return !copyOfDataArr.some(copyEmployeeObj=>{       
            return copyEmployeeObj.id === employeeObj.id && copyEmployeeObj.name === employeeObj.name  && copyEmployeeObj.surname === employeeObj.surname && copyEmployeeObj.dateOfBirth === employeeObj.dateOfBirth && copyEmployeeObj.position === employeeObj.position && copyEmployeeObj.phoneNumber === employeeObj.phoneNumber      
          });
        });
        setUpdatedEmployees(comparedEmloyeesArr)
      
      },[employees])
    
    
      // useEffect(() => {
      //   console.log(updatedEmployees)
      // }, [updatedEmployees])
      // useEffect(() => {
      //   console.log(deletedEmployees)
      // }, [deletedEmployees])

    return (
        <EmployeesContext.Provider value={{employees,updatedEmployees,deletedEmployees,isModalOpened,updatedAndDeletedEmployees,deleteEmployee,showModal,resetData,handleEmployeeTableCell}}>
            {props.children}
        </EmployeesContext.Provider>
    )
}

export default EmployeesContextProvider