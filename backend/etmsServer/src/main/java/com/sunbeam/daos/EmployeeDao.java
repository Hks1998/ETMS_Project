package com.sunbeam.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Employee;

public interface EmployeeDao extends JpaRepository<Employee, Integer> {

	Employee findByEmpId(int empId);
	Employee findByEmail(String email);
}
