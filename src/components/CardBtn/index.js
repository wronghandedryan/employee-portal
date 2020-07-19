import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeAPIContext";
import "./style.css";

function CardBtn(props) {
  const { handleBtnClick } = useContext(EmployeeContext);
  return (
    <button onClick={handleBtnClick} className={`card-btn ${props["data-value"]}`} {...props} />
  );
}

export default CardBtn;
