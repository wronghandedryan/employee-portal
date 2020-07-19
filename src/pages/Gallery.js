import React, { useEffect, useState } from "react";
import API from "../utils/employeeAPI";
import EmployeeAPIContext from "../utils/EmployeeAPIContext";
import CardContainer from "../components/CardContainer";
import Row from "../components/Row";

function Gallery() {
  const [employeeAPI, setemployeeAPI] = useState([]);
  // const [employeeID, setemployeeID] = useState({});
  const [employeeAPIIndex, setemployeeAPIIndex] = useState(0);

  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    loademployeeAPI();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function loademployeeAPI() {
    API.getemployeeID()
      .then(employeeAPI => {
        API.getemployeeByemployeeAPI(employeeAPIIndex[0]).then(employeeAPIIndex => {
          setemployeeAPI(employeeAPI[0], employeeAPI);
          setemployeeAPI(employeeAPI[0]);
        });
      })
      .catch(err => console.log(err));
  }

  function nextemployeeAPI(employeeAPIIndex) {
    // Ensure that the user index stays within our range of users
    if (employeeAPIIndex >= employeeAPI.length) {
      employeeAPIIndex = 0;
    }
    setemployeeAPIIndex(employeeAPIIndex);
    setemployeeAPI(employeeAPI[employeeAPIIndex]);
  }

  function previousemployeeAPIIndex(employeeAPIIndex) {
    // Ensure that the user index stays within our range of users
    if (employeeAPIIndex < 0) {
      employeeAPIIndex = employeeAPI.length - 1;
    }
    setemployeeAPI(employeeAPIIndex);
    setemployeeAPI(employeeAPI[employeeAPI.index]);
  }

  function handleBtnClick(event) {
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const newemployeeAPIIndex = employeeAPIIndex + 1;
      nextemployeeAPI(newemployeeAPIIndex);
    } else {
      const newemployeeAPIIndex = employeeAPIIndex - 1;
      previousemployeeAPIIndex(newemployeeAPIIndex);
    }
  }

  return (
    <EmployeeAPIContext.Provider value={{ employeeAPI, employeeAPIIndex, handleBtnClick }}>
      <div>
        <h1 className="text-center">Welocome To Employee-Portal</h1>
        <h3 className="text-center"> Employee Search</h3>
        <Row>
          <CardContainer />
        </Row>
      </div>
    </EmployeeAPIContext.Provider>
  );
}

export default Gallery;
