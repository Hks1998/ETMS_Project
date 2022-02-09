create table employee(emp_id int primary key identity(101,1) ,
name  varchar(100)  not null , 
email  varchar(100) not null unique,
password  varchar(512) not null unique,
phone bigint unique ,
role  varchar(50) ,
dept_id   int ,
designation   varchar(50) ,
manager_id   int,
task_assigned  varchar(100) DEFAULT 'Unassigned'
);

--sp_help employee

CREATE TABLE project (
 project_id INT primary key identity,
 project_name VARCHAR(100),
 status VARCHAR(50) DEFAULT 'In-progress', 
 project_description VARCHAR(300),
 start_date date,
 due_date date );
 
create table department(
    dept_id int primary key,
    dept_name varchar(100) not null,
    manager_id int not null
);
 
 create table deptProject(
    dept_id int,
    project_id int,
    foreign key(project_id) REFERENCES project(project_id),
    foreign key(dept_id) REFERENCES department(dept_id)
);

CREATE TABLE task (
	task_id INT primary key identity,
	task_name VARCHAR(100) NOT NULL,
	status VARCHAR(50) DEFAULT 'In-progress',
	assignment_status VARCHAR(50) DEFAULT 'Unassigned',  
	description VARCHAR(300),
	start_date date,
	due_date date,
	emp_id int,
	project_id int,
	dept_id int,
	foreign key(emp_id) REFERENCES employee(emp_id),
	foreign key(project_id) REFERENCES project(project_id),
	foreign key(dept_id) REFERENCES department(dept_id)
);