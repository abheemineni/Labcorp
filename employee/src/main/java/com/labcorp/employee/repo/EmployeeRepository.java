package com.labcorp.employee.repo;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.labcorp.employee.model.Employee;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Integer> {

	@Modifying
	@Transactional
	@Query(value = "update employee set working_days = ?2, vacation_days = ?3 WHERE employee_id=?1", nativeQuery = true)
	void updateWorkingDays(Integer employeeId, Float workingDays, Float vacationDays);

	@Modifying
	@Transactional
	@Query(value = "update employee set vacation_days = ?2 WHERE employee_id=?1", nativeQuery = true)
	void updateVacationDays(Integer employeeId, Float vacationDays);

}
