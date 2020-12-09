package com.labcorp.employee.service;

import java.util.List;

import com.labcorp.employee.model.Employee;

public interface EmployeeService {

	List<Employee> getEmployees();

	Employee updateWorkHours(Employee employee);

	Employee updateVacationHours(Employee employee);

}
