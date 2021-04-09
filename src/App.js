import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import EmployeesContextProvider from './context/EmployeesContext';
import UpdatedEmployeesList from './pages/UpdatedEmployeesList'
import DeletedEmployeesList from './pages/DeletedEmployeesList'
import Table from './pages/Table'
import Navbar from './components/Navbar'
import Error from './pages/Error'


const App = () => {
  return (
    <Router>
    <EmployeesContextProvider>

      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <Table/>
        </Route>
        <Route path='/updated'>
          <UpdatedEmployeesList/>
        </Route>
        <Route path='/deleted'>
          <DeletedEmployeesList/>
        </Route>
        <Route path='*'>
          <Error/>
        </Route>
      </Switch>
    </EmployeesContextProvider>
     </Router>
  )
};


// function App() {
//   // let copyOfData = data.slice()
//   // let copyOfData = [...data]
//   let copyOfData = JSON.parse(JSON.stringify(data))
//   const [employees, setEmployees] = useState([...copyOfData])
//   const [updatedEmployees, setUpdatedEmployees] = useState([])
//   const [deletedEmployees, setDeletedEmployees] = useState([])
//   const [isModalOpened, setIsModalOpened] = useState(false)

//   const deleteEmployee = (inputId) =>{
//     let tempEmployees = [...employees];

//     const mappedEmployees = tempEmployees.map(employee => {
//       if(employee.inputId === inputId){
//         if(employee.isDeleted){
//           employee.isDeleted = false;
//         }
//         else if(!employee.isDeleted){
//           employee.isDeleted = true;
//         }
//       }
//       return employee
//     })
//     const filteredEmployees = mappedEmployees.filter(employee=> employee.isDeleted === true)

//     setDeletedEmployees(filteredEmployees)
//     // console.log(mappedEmployees)
//     // console.log(filteredEmployees)
//     setEmployees(mappedEmployees)
    
//   }

//   const showModal = ()=> {
//     setIsModalOpened(!isModalOpened)
//   }

//   const handleEmployeeTableCell = (e) => {

//     let str = e.target.id;
//     let arr = str.split("");
//     arr.splice(str.length - 6, str.length);
//     let idStr = arr.join('');

//     let item = {
//       id: idStr,
//       name: e.target.name,
//       value: e.target.value
//     };
//     let copyOfEmployeesArr = employees.slice();
   

//     let editedEmployees = copyOfEmployeesArr.map(employee=> {
//       for (let key in employee) {
//           if (key === item.name && employee.inputId === item.id) {
//             employee[key] = item.value;
//           }
//       }
//       return employee;
//     });
//     setEmployees(editedEmployees);

//   };



//   useEffect(() => {
//     let copyOfDataArr = JSON.parse(JSON.stringify(data))
//     let copyOfEmployeesArr = employees.slice();    

//     const comparedEmloyeesArr = copyOfEmployeesArr.filter(employeeObj=>{
//       return !copyOfDataArr.some(copyEmployeeObj=>{       
//         return copyEmployeeObj.id === employeeObj.id && copyEmployeeObj.name === employeeObj.name  && copyEmployeeObj.surname === employeeObj.surname && copyEmployeeObj.dateOfBirth === employeeObj.dateOfBirth && copyEmployeeObj.position === employeeObj.position && copyEmployeeObj.phoneNumber === employeeObj.phoneNumber      
//       });
//     });
//     setUpdatedEmployees(comparedEmloyeesArr)
  
//   },[employees])


//   useEffect(() => {
//     console.log(updatedEmployees)
//   }, [updatedEmployees])

//   return (
//     <main>
//       <section className="container">
//         <h1>Employees Table</h1>
//         <article>
//           {/* <div>Updated Employees</div> */}
//           {/* <div>Deleted Employees</div> */}
//           <UpdatedEmployeesList employees={updatedEmployees}/>
//           <DeletedEmployeesList deletedEmployees={deletedEmployees}/>
//         </article>

//         <article className="table-container">
//             <table id="employees">
//                 <thead>
//                 <tr>
//                     <th>ID</th>
//                     <th>Name</th>
//                     <th>Surname</th>
//                     <th>Date of birth</th>
//                     <th>Position</th>
//                     <th>Phone number</th>
//                     <th>Status</th>
//                     <th>Action</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {
//                         employees.map((employee) => 
//                           {
//                             const {id, name, surname, dateOfBirth, position, phoneNumber, isDeleted, inputId} = employee
//                             // console.log(id, name, surname, dateOfBirth, position, phoneNumber, isDeleted)
//                             return(
//                               <tr key={inputId} className={`status ${isDeleted ? 'deleted' : 'not-deleted'}`}>
//                                 {/* <td>{id}</td>
//                                 <td>{name}</td>
//                                 <td>{surname}</td>
//                                 <td>{dateOfBirth}</td> */}
//                                 {/* <td>{position}</td> */}
//                                 {/* <td>{phoneNumber}</td> */}
//                                 <EditableTableCell handleEmployeeTableCell={handleEmployeeTableCell} cellAttrs={{
//                                   "type": "id",
//                                   value: id,
//                                   id: `${inputId}input1`
//                                 }}/>
//                                 <EditableTableCell handleEmployeeTableCell={handleEmployeeTableCell} cellAttrs={{
//                                   "type": "name",
//                                   value: name,
//                                   id: `${inputId}input2`
//                                 }}/>
//                                 <EditableTableCell handleEmployeeTableCell={handleEmployeeTableCell} cellAttrs={{
//                                   "type": "surname",
//                                   value: surname,
//                                   id: `${inputId}input3`
//                                 }}/>
//                                 <EditableTableCell handleEmployeeTableCell={handleEmployeeTableCell} cellAttrs={{
//                                   "type": "dateOfBirth",
//                                   value: dateOfBirth,
//                                   id: `${inputId}input4`
//                                 }}/>
//                                 <EditableTableCell handleEmployeeTableCell={handleEmployeeTableCell} cellAttrs={{
//                                   "type": "position",
//                                   value: position,
//                                   id: `${inputId}input5`
//                                 }}/>
//                                 <EditableTableCell handleEmployeeTableCell={handleEmployeeTableCell} cellAttrs={{
//                                   "type": "phoneNumber",
//                                   value: phoneNumber,
//                                   id: `${inputId}input6`
//                                 }}/>
//                                 <td className={`status ${isDeleted ? 'deleted' : 'not-deleted'}`}><span>{isDeleted ? 'deleted' : '.............'}</span></td>
//                                 <td>
//                                   {
//                                     isDeleted ? <i className="fas fa-trash-restore" onClick={()=>deleteEmployee(inputId)}></i> : <i className="fas fa-trash" onClick={()=>deleteEmployee(inputId)}/>
//                                   }
                                   
//                                 </td>
                                
//                             </tr>
//                             )
//                           }
//                         )
//                     }
//                 </tbody>
//             </table>
//         </article>

//         <button type='button' onClick={showModal}>Submit data</button>
//       </section>

// {
//   isModalOpened &&  <EmpoleyeesDataModal employees={employees} showModal={showModal}/>
// }
   
//     </main>
//     )
// }

export default App;
