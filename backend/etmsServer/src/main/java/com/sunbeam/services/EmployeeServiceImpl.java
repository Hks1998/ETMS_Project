package com.sunbeam.services;

import java.util.Collections;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.daos.EmployeeDao;
import com.sunbeam.dtos.Credentials;
import com.sunbeam.dtos.DtoEntityConverter;
import com.sunbeam.dtos.EmployeeDTO;
import com.sunbeam.entities.Employee;

@Transactional
@Service
public class EmployeeServiceImpl {

	@Autowired
	private EmployeeDao employeeDao;
//	@Autowired
//	private PasswordEncoder passwordEncoder;
	@Autowired
	private DtoEntityConverter converter;

	
//	public Employee findByEmpId(int empId) {
//		Employee employee = employeeDao.findByEmpId(empId);
//		return employee;
//	}
//	
//	public Employee findByEmail(String email) {
//		Employee employee = employeeDao.findByEmail(email);
//		return employee;
//	}
//	
//	public Employee findEmployeeByEmailAndPassword(Credentials cred) {
//		Employee emp = employeeDao.findByEmail(cred.getEmail());
//		String rawPassword = cred.getPassword();
//		if(emp != null && rawPassword.equals(emp.getPassword())) {
////			emp.setPassword("********");
//			return emp;
//		}
//		return null;
//	}
//	
//	public Map<String, Object> saveEmployee(Employee emp) {
//		String rawPassword = emp.getPassword();
//		emp.setPassword(rawPassword);
//		
//		emp = employeeDao.save(emp);
//		return Collections.singletonMap("insertedId", emp.getEmpId());
//	}
	
//  ==================================================================================================

	public EmployeeDTO findByEmpId(int empId) {
		Employee employee = employeeDao.findByEmpId(empId);
		return converter.toEmployeeDto(employee);
	}

	public EmployeeDTO findByEmail(String email) {
		Employee employee = employeeDao.findByEmail(email);
		return converter.toEmployeeDto(employee);
	}

	public EmployeeDTO findEmployeeByEmailAndPassword(Credentials cred) {
		Employee dbEmployee = employeeDao.findByEmail(cred.getEmail());
		String rawPassword = cred.getPassword();
		if (dbEmployee != null && rawPassword.equals(dbEmployee.getPassword())) {
			EmployeeDTO result = converter.toEmployeeDto(dbEmployee);
			result.setPassword("********");
			return result;
		}
		return null;
	}
	
	public EmployeeDTO saveEmployee(EmployeeDTO employeeDto) {
		String rawPassword = employeeDto.getPassword();
		employeeDto.setPassword(rawPassword);
		Employee employee = converter.toEmployeeEntity(employeeDto);
		employee = employeeDao.save(employee);
		employeeDto = converter.toEmployeeDto(employee);
		employeeDto.setPassword("*******");
		return employeeDto;
	}
//  ==================================================================================================

//	public Map<String, Object> saveEmployee(EmployeeDTO employeeDto) {
//		String rawPassword = employeeDto.getPassword();
////    String encPassword = passwordEncoder.encode(rawPassword);
//		employeeDto.setPassword(rawPassword);
//		Employee employee = converter.toEmployeeEntity(employeeDto);
//		employee = employeeDao.save(employee);
//		return Collections.singletonMap("insertedId", employee.getEmpId());
//	}
//  ==================================================================================================
	

}
