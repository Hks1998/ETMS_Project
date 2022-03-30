package com.sunbeam.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Project;

public interface ProjectDao extends JpaRepository<Project, Integer>{
	
	Project findByProjectId(int projectId);
}
