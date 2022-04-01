package com.sunbeam.services;

import java.util.stream.Collectors;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.daos.TaskDao;
import com.sunbeam.dtos.DtoEntityConverter;
import com.sunbeam.dtos.TaskDTO;
import com.sunbeam.entities.Task;

@Transactional
@Service
public class ManagerServiceImpl {
	@Autowired
	private TaskDao taskDao;
	@Autowired
	private DtoEntityConverter converter;
	
	public List<TaskDTO> findAllTasks() {
		List<Task> taskList = taskDao.findAll();
		return taskList.stream()
			.map(task -> converter.toTaskDto(task))
			.collect(Collectors.toList());
	}
	
	public Task findByTaskId(int taskId) {
		Task task = taskDao.findByTaskId(taskId);
		return task;
	}
	
	public Task save(Task task) {
		return taskDao.save(task);
	}
}
