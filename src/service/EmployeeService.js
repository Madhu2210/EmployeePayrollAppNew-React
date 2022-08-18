import axios from 'axios';
import React from 'react';

class EmployeeService extends React.Component {
    baseUrl = `http://localhost:8083/employeePayrollService/`;

    addEmployee = (data) => {
        return axios.post(this.baseUrl + 'AddEmployee', data)
    }

    getEmployee = () => {
        return axios.get(this.baseUrl + 'getEmployee')
    }

    getEmployeeById = (id) => {
        return axios.get(this.baseUrl + 'getEmployee/' + id)
    }

    updateEmployee = (data, id) => {
        return axios.put(this.baseUrl + 'updateEmployee/' + id , data)
    }

    deleteEmployee = (data) => {
        return axios.delete(this.baseUrl + 'delete/' + data)
    }
 }

export default new EmployeeService();