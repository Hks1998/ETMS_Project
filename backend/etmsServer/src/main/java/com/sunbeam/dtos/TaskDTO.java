package com.sunbeam.dtos;

import java.util.Date;

import com.sunbeam.entities.Project;


public class TaskDTO {

	private int taskId;
	private Project project;
	private String taskName;
	private Date startDate;
	private Date dueDate;
	private String status;
	
	public TaskDTO() {
		// TODO Auto-generated constructor stub
	}

	public TaskDTO(int taskId, Project project, String taskName, Date startDate, Date dueDate, String status) {
		super();
		this.taskId = taskId;
		this.project = project;
		this.taskName = taskName;
		this.startDate = startDate;
		this.dueDate = dueDate;
		this.status = status;
	}

	public int getTaskId() {
		return taskId;
	}

	public void setTaskId(int taskId) {
		this.taskId = taskId;
	}

//	public int getProjectId() {
//		return projectId;
//	}
//
//	public void setProjectId(int projectId) {
//		this.projectId = projectId;
//	}

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	public String getTaskName() {
		return taskName;
	}


	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getDueDate() {
		return dueDate;
	}

	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return String.format("TaskDTO [taskId=%s, project=%s, taskName=%s, startDate=%s, dueDate=%s, status=%s]",
				taskId, project, taskName, startDate, dueDate, status);
	}
	
	
}
