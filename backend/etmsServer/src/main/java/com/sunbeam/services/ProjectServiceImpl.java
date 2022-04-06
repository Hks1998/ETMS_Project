package com.sunbeam.services;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.daos.ProjectDao;
import com.sunbeam.dtos.DtoEntityConverter;
import com.sunbeam.dtos.ProjectDTO;
import com.sunbeam.entities.Project;

@Transactional
@Service
public class ProjectServiceImpl {

	@Autowired
	private ProjectDao projectDao;
	@Autowired
	private DtoEntityConverter converter;

	public Map<String, Object> createProject(Project project, ProjectDTO projectDto) {
		project = converter.toProjectEntity(project, projectDto);
		System.out.println(project);
		project = projectDao.save(project);
		return Collections.singletonMap("insertedId", project.getprojectId());
	}

	public Project getProject(int projectId) {
		Project project = projectDao.getById(projectId);
		return project;
	}

	public List<Project> listAllProjects() {
		List<Project> projectList = projectDao.findAll();
		// return projectList.stream().map(project ->
		// converter.toProjectDTO(project)).collect(Collectors.toList());
		return projectList;
	}

	public Project save(Project project) {
		return projectDao.save(project);
	}
}
