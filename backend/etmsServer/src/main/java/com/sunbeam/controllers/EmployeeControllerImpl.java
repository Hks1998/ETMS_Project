package com.sunbeam.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dtos.Credentials;
import com.sunbeam.dtos.Response;
import com.sunbeam.entities.Employee;
import com.sunbeam.services.EmployeeServiceImpl;

@CrossOrigin(origins = "*")
@RestController
public class EmployeeControllerImpl {

	@Autowired
	private EmployeeServiceImpl employeeService;
	
	@PostMapping("/employee/signin")
	public ResponseEntity<?> signIn(@RequestBody Credentials cred) {
		Employee emp = employeeService.findEmployeeByEmailAndPassword(cred);
		if(emp == null)
			return Response.error("user not found");
		return Response.success(emp);
	}
	
	@PostMapping("/admin/signup")
	public ResponseEntity<?> signUp(@RequestBody Employee emp) {
//		System.out.println(emp);
		Map<String, Object> result = employeeService.saveEmployee(emp);
		return Response.success(result);
	}
	
	@GetMapping("/")
	public ResponseEntity<?> homepage() {
		
//		return Response.status(HttpStatus.OK);
		return Response.success("Welcome");
	}
}
