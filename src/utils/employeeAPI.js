import React from 'react';
import axios from "axios";
//const url = 'https://my.api.mockaroo.com/employee.json?';
const key = key('8f72b0b0');
const employeeAPI = axios({url:'https://my.api.mockaroo.com/employee.json?', key:'8f72b0b0'});
const employeeID = ["first_name", "last_name", "department", "title", "id", "image"];

export default component = employeeAPI( {
  getemployeeAPI: function employeeAPI(){return(url + key)},
   return: employeeAPI((url + key), {
    return: new Promise((resolve, reject) => {
      axios
        fetch(employeeAPI()({url:"https://my.api.mockaroo.com/employee.json?", key:"8f72b0b0"}));
        response.json().then(res => {
          const employeeAPI = res.json;
          const results = employeeAPI.map(employeeAPI => {
            return {
              firstname: employeeID.first_name,
              lastname: employeeID.last_name,
              image: employeeID.image,
              department: employeeID.Department,
              title: employeeID.title,
              id: employeeID.id,
            };
          });
          resolve(results);
        })
        .catch(err => reject(err));
    })
  },
  
 function employeeAPI(employeeAPI) {
    return new axios.Promise(resolve => {
      resolve(employeeAPI);
    });
  })
   });

export default employeeAPI;