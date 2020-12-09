package com.labcorp.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.labcorp.employee.model.Employee;
import com.labcorp.employee.model.EmployeeType;
import com.labcorp.employee.repo.EmployeeRepository;

@SpringBootApplication
public class EmployeeApplication implements ApplicationRunner {

	@Autowired
	EmployeeRepository employeeRepo;
	
	public static void main(String[] args) {
		SpringApplication.run(EmployeeApplication.class, args);
	}
	@Override
	public void run(ApplicationArguments args) throws Exception {
		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 10; j++) {

				if (i == 0) {
					Employee employee = new Employee();
					employee.setEmployeeType(EmployeeType.HOURLY);
					employee.setVacationDays(0.0f);
					employee.setWorkingDays(0.0f);
					employeeRepo.save(employee);
				} else if (i == 1) {
					Employee employee = new Employee();
					employee.setEmployeeType(EmployeeType.SALARIED);
					employee.setVacationDays(0.0f);
					employee.setWorkingDays(0.0f);
					employeeRepo.save(employee);
				} else {
					Employee employee = new Employee();
					employee.setEmployeeType(EmployeeType.MANAGER);
					employee.setVacationDays(0.0f);
					employee.setWorkingDays(0.0f);
					employeeRepo.save(employee);
				}
			}
		}
	}

}
