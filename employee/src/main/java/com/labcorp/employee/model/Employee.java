package com.labcorp.employee.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Table(name = "employee")
public class Employee {
	
	@Id
	@GeneratedValue
	private Integer employeeId;
	
	private EmployeeType employeeType;
	
	private Float workingDays;
	
	private Float vacationDays;

	private Float vacationDaysUsed;
}
