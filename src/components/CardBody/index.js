import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeAPIContext";

function CardBody() {
  const { employeeID } = useContext(EmployeeContext);
  return (
    <div>
      <h4>Favorite language: {employeeID.id}</h4>
    </div>
  );
}

export default CardBody;
