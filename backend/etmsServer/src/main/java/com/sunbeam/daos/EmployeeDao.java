package com.sunbeam.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sunbeam.entities.Employee;

public interface EmployeeDao extends JpaRepository<Employee, Integer> {

	Employee findByEmpId(int empId);
	Employee findByEmail(String email);
	
//	@Query("select e.empId, e.name, t.taskId from employee e INNER JOIN task t ON e.empId=t.empId")
//	List<Employee> findAllEmployeesWithTaskId();
}
