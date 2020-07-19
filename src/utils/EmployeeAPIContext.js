import React from "react";


const EmployeeAPIContext = React.createContext({
  first_name: "",
  last_name: "",
  image: "",
  title: "",
  department: "",
  id: "",
  handleBtnClick: () => {}
});
export default EmployeeAPIContext;
