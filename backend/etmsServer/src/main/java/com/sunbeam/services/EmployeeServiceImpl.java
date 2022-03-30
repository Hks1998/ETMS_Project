package com.sunbeam.services;


import java.util.Collections;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.daos.EmployeeDao;
import com.sunbeam.dtos.Credentials;
import com.sunbeam.entities.Employee;

@Transactional
@Service
public class EmployeeServiceImpl {

	@Autowired
	private EmployeeDao employeeDao;
//	@Autowired
//	private PasswordEncoder passwordEncoder;
	
	
	public Employee findByEmpId(int empId) {
		Employee employee = employeeDao.findByEmpId(empId);
		return employee;
	}
	
	public Employee findByEmail(String email) {
		Employee employee = employeeDao.findByEmail(email);
		return employee;
	}
	
	public Employee findEmployeeByEmailAndPassword(Credentials cred) {
		Employee emp = employeeDao.findByEmail(cred.getEmail());
		String rawPassword = cred.getPassword();
		if(emp != null && rawPassword.equals(emp.getPassword())) {
//			emp.setPassword("********");
			return emp;
		}
		return null;
	}
	
	public Map<String, Object> saveEmployee(Employee emp) {
		String rawPassword = emp.getPassword();
		emp.setPassword(rawPassword);
		
		emp = employeeDao.save(emp);
		return Collections.singletonMap("insertedId", emp.getEmpId());
	}
}
