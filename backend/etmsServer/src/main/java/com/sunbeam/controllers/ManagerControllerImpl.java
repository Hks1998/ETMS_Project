package com.sunbeam.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dtos.Response;
import com.sunbeam.dtos.TaskDTO;
import com.sunbeam.entities.Task;
import com.sunbeam.services.ManagerServiceImpl;

@CrossOrigin(origins = "*")
@RestController
public class ManagerControllerImpl {
	@Autowired
	private ManagerServiceImpl managerService;

	@GetMapping("/manager")
	public ResponseEntity<?> findAllTasks() {

		List<TaskDTO> result = new ArrayList<>();
		result = managerService.findAllTasks();
		return Response.success(result);
	}

//	@PutMapping("/manager/assignTask/{taskId}")
//	public ResponseEntity<?> assignTask(@PathVariable("taskId") int taskId,@RequestBody TaskDTO taskDto){
//		Task task = managerService.findByTaskId(taskId);
//		task.setStatus(taskDto.getStatus());
//		
//		Task updatedTask = managerService.save(task);
//		if(updatedTask != null)
//			return Response.success(updatedTask);
//		return Response.error(null);
//	}

	@PatchMapping("/manager/assignTask/{taskId}")
	public ResponseEntity<?> assignTask(@PathVariable("taskId") int taskId,@RequestBody TaskDTO taskDto) {
		Task task = managerService.findByTaskId(taskId);
		
//		boolean needUpdate = false;
//		if (StringUtils.hasLength(taskDto.getStatus())) {
//			task.setStatus(taskDto.getStatus());
//			needUpdate = true;
//		}
//		if(needUpdate) {
//			managerService.save(task);
//			return Response.success(task);
//		}
//		return null;
//		===========================================================
		
		task.setStatus(taskDto.getStatus());
		Task updatedTask = managerService.save(task);
		if (updatedTask != null)
			return Response.success(updatedTask);
		return Response.error(null);
	}
}
