package com.sunbeam.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Task;

public interface TaskDao extends JpaRepository<Task, Integer>{

	Task findByTaskId(int taskId);
	
}
