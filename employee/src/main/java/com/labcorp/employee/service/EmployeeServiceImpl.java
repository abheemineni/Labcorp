package com.labcorp.employee.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.labcorp.employee.model.Employee;
import com.labcorp.employee.model.EmployeeType;
import com.labcorp.employee.repo.EmployeeRepository;

@Service("employeeServiceImpl")
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	EmployeeRepository employeeRepo;

	@Override
	public List<Employee> getEmployees() {

		List<Employee> employeeList = new ArrayList<Employee>();
		employeeRepo.findAll().forEach(employee -> {
			employee.setVacationDays(new Float(String.format("%.2f", employee.getVacationDays())));
			employee.setWorkingDays(new Float(String.format("%.2f", employee.getWorkingDays())));
			employeeList.add(employee);
		});
		return employeeList;
	}

	@Override
	public Employee updateWorkHours(Employee employee) {
		Float vacationDays = 0.0f;
		Float workingDays = employee.getWorkingDays();
		if (employee.getEmployeeType().equals(EmployeeType.HOURLY))
			vacationDays = (workingDays * 10) / 260;
		else if (employee.getEmployeeType().equals(EmployeeType.SALARIED))
			vacationDays = (workingDays * 15) / 260;
		else
			vacationDays = (workingDays * 30) / 260;

		employee.setVacationDays(vacationDays);
		employeeRepo.updateWorkingDays(employee.getEmployeeId(), workingDays, vacationDays);
		return employeeRepo.findById(employee.getEmployeeId()).get();
	}

	@Override
	public Employee updateVacationHours(Employee employee) {
		Float vacationDays = employee.getVacationDays() - employee.getVacationDaysUsed();
		employee.setVacationDays(vacationDays);
		employeeRepo.updateVacationDays(employee.getEmployeeId(), vacationDays);
		return employeeRepo.findById(employee.getEmployeeId()).get();
	}

}
