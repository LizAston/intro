import React from 'react';

const Employee = (props) => {
  const { firstName, lastName, age, employeeId} = props;
  return(
    <div>
      <h6>
          Employee name: {firstName} {lastName}, age: {age}, ID: {employeeId}
      </h6>
    </div>
  )

};

export default Employee;