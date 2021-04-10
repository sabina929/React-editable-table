import React, {createContext, useState, useEffect, useCallback} from 'react'
import data from '../data';

export const EmployeesContext = createContext()

const EmployeesContextProvider = (props) => {
    let copyOfData = JSON.parse(JSON.stringify(data))
    const [employees, setEmployees] = useState([...copyOfData])
    const [updatedEmployees, setUpdatedEmployees] = useState([])
    const [deletedEmployees, setDeletedEmployees] = useState([])
    const [isModalOpened, setIsModalOpened] = useState(false)
    const [updatedAndDeletedEmployees, setUpdatedAndDeletedEmployees] = useState({})
    const [currentEmployees, setCurrentEmployees] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const employeesPerPage = 10

    const [searchTerm, setSearchTerm] = useState("");
    const [isSearched, setIsSearched] = useState(false);
    
    // DELETE EMPLOYEE
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

        const markedAsDeletedEmployees = mappedEmployees.filter(employee=> employee.isDeleted === true)
        setDeletedEmployees(markedAsDeletedEmployees)
        // console.log(mappedEmployees)
        // console.log(markedAsDeletedEmployees)
        setEmployees(mappedEmployees)
    }
    
    // GET UPDATED AND DELETED LISTS
    const showModal = ()=> {
      setIsModalOpened(!isModalOpened)
      const notDeletedEmployees = updatedEmployees.filter(updatedEmployee=> updatedEmployee.isDeleted !== true)
      let updatedAndDeletedEmployees = {
        updated: [...notDeletedEmployees],
        deleted: [...deletedEmployees]
      }
      // console.log(updatedAndDeletedEmployees)
      setUpdatedAndDeletedEmployees(updatedAndDeletedEmployees)
    }
      
    // RESET DATA
    const resetData = ()=> {
      let copyOfData = JSON.parse(JSON.stringify(data))
      setEmployees(copyOfData)
      // const filteredEmployees = copyOfData.filter(employee=> employee.isDeleted === true)
      setDeletedEmployees([])
      setUpdatedEmployees([])
      
    }
    
    // EDITING TABLE CELLS
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
    
    // COMPARE INITIAL AND UPDATED
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
    
    // PAGINATION
    const paginate = useCallback((pageNumber) => {
        const indexOfLastBook = pageNumber * employeesPerPage;
        const indexOfFirstBook = indexOfLastBook - employeesPerPage;
        const currentEmployees = employees.slice(indexOfFirstBook, indexOfLastBook);
        setCurrentEmployees(currentEmployees)
        setCurrentPage(pageNumber)
    }, [employeesPerPage, employees])

    // useEffect(() => {
    //   console.log(updatedEmployees)
    // }, [updatedEmployees])

    // useEffect(() => {
    //   console.log(deletedEmployees)
    // }, [deletedEmployees])

    useEffect(() => {
      paginate(currentPage)
    }, [currentPage, paginate])

    const handleChange = event => {
      setSearchTerm(event.target.value);
    };

    const getSearchResult = useCallback(() => {
      let results = []
      let copyOfEmployeesArr = employees.slice();
      if(searchTerm === ''|| searchTerm === null || searchTerm === ' '){
        setIsSearched(false)
      }
      else{
        results = copyOfEmployeesArr.filter(employee => 
          employee.name.toLowerCase().includes(searchTerm.toLowerCase()) || employee.surname.toLowerCase().includes(searchTerm.toLowerCase()) || employee.id.toLowerCase().includes(searchTerm.toLowerCase()) || employee.dateOfBirth.includes(searchTerm) || employee.position.toLowerCase().includes(searchTerm.toLowerCase()) || employee.phoneNumber.includes(searchTerm)
          )
          setIsSearched(true)
          setCurrentEmployees(results);
      }

    }, [searchTerm, employees])

    useEffect(() => {
      getSearchResult()   
    },[getSearchResult]);  
   

    return (
        <EmployeesContext.Provider value={{employees,updatedEmployees,deletedEmployees,isModalOpened,updatedAndDeletedEmployees,deleteEmployee,showModal,resetData,handleEmployeeTableCell,currentEmployees,employeesPerPage, currentPage, paginate, searchTerm, isSearched, handleChange}}>
            {props.children}
        </EmployeesContext.Provider>
    )
}

export default EmployeesContextProvider