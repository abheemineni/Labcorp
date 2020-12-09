package com.labcorp.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.labcorp.employee.model.Employee;
import com.labcorp.employee.service.EmployeeService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/v1/employee")
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {
	
	@Autowired
	EmployeeService employeeServiceImpl;
	
	@GetMapping("/employee-list")
	public List<Employee> getEmployees(){
		log.info("Inside Employee Controller....");
		
		List<Employee> employeeList = employeeServiceImpl.getEmployees();
		return 	employeeList ;
	}
	
	@PutMapping("/work/{id}")
	public Employee updateWorkHours(@PathVariable Integer id ,@RequestBody Employee employee) {
		Employee response = employeeServiceImpl.updateWorkHours(employee);
		return response ;
	}
	
	@PutMapping("/vacation/{id}")
	public Employee updateVacationHours(@PathVariable Integer id ,@RequestBody Employee employee) {
		Employee response = employeeServiceImpl.updateVacationHours(employee);
		return response ;
	}
	

}
