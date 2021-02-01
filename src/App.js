import React from "react";
//import Counter from "./Counter";
import './App.css';
import Employee from "./Employee";

const employeeInfo = [
  {
    firstName: "Liz",
    lastName: "A",
    age: "33",  
    employeeId: "1",  
  },
  {
    firstName: "Bertie",
    lastName: "B",
    age: "30", 
    employeeId: "2",     
  },
  {
    firstName: "Molly",
    lastName: "C",
    age: "29", 
    employeeId: "3",     
  },
  {
    firstName: "Winston",
    lastName: "C",
    age: "49", 
    employeeId: "4",     
  }
];

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Company Director</h1>
        {
          employeeInfo.map((employee) => {
            return <Employee key = {employee.employeeId}{...employee}/>;          
        })} 
      </header>
    </div>
  );
}

export default App;
