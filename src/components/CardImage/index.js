import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeAPIContext";

function CardImg() {
  const { employeeID } = useContext(EmployeeContext);
  return (
    <div>
      <img className="card-img" src={employeeID.image} alt="user thumbnail" />
      {!employeeID.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    </div>
  );
}

export default CardImg;