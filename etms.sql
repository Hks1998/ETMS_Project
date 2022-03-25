create database etmsDB;

create table employee(emp_id int primary key auto_increment ,
name  varchar(100)  not null , 
email  varchar(100) not null unique,
password  varchar(512) not null unique,
phone bigint unique ,
role  varchar(50) ,
dept_id   int ,
designation   varchar(50) ,
manager_id   int,
); 

alter table employee auto_increment=101;

insert into employee (name,email,password,phone,role,dept_id,designation,manager_id ,task_assigned) 
            values('Ajinkya','ajinkya@test.com','123456',9999999999,'manager',1,'Senior Executive',NULL,'Unassigned'); 
insert into employee (name,email,password,phone,role,dept_id,designation,manager_id ,task_assigned) 
            values('Rahul','rahul@test.com','123',9999999998,'manager',2,'Frontend web developer',NULL,'Unassigned');
insert into employee (name,email,password,phone,role,dept_id,designation,manager_id ,task_assigned) 
            values('Priya','priya@test.com','456',9999999997,'manager',3,'Operations manager',NULL,'Unassigned');
insert into employee (name,email,password,phone,role,dept_id,designation,manager_id ,task_assigned) 
            values('Gaurav','gaurav@test.com','789',9999999996,'admin',4,'Administrative officer',NULL,'Unassigned');
insert into employee (name,email,password,phone,role,dept_id,designation,manager_id ,task_assigned) 
            values('Pragya','pragya@test.com','111',9999999995,'employee',1,'Java developer',101,'Unassigned');									


CREATE TABLE project (
 project_id INT primary key auto_increment,
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
	task_id INT primary key auto_increment,
	task_name VARCHAR(100) NOT NULL,
	status VARCHAR(50) DEFAULT 'Unassigned',  
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

--Project Queries
insert into project(project_name,status,project_description,start_date,due_date) 
values('SkySports','Completed','sports channel','2022-01-08','2022-06-06');

--Task Queries
insert into task(task_name,status,description,start_date,due_date,emp_id,project_id,dept_id) 
values('t1','In-progress','sports channel','2022-01-08','2022-06-06',101,1,1);

--Department Queries
insert into department values(1,'Backend',101);
insert into department values(2,'Frontend',102);
insert into department values(3,'Operations',103);
insert into department values(4,'Administration',104);

--Employee/Manager: Ongoing Task Queries
select t.task_id, t.task_name, p.project_name, t.start_date,t.due_date,t.status from task t
left join project p ON t.project_id =p.project_id;