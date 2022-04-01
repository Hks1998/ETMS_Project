create database etmsDB;

create table employee(
empId int primary key auto_increment ,
name  varchar(100)  not null , 
email  varchar(100) not null unique,
password  varchar(512) not null,
phone bigint unique ,
role  varchar(50) ,
deptId   int ,
designation   varchar(50) ,
managerId   int
); 

alter table employee auto_increment=101;


CREATE TABLE project (
 projectId INT primary key auto_increment,
 projectName VARCHAR(100),
 status VARCHAR(50) DEFAULT 'In-progress', 
 projectDescription VARCHAR(300),
 startDate date,
 dueDate date );
 
alter table project alter status set default 'In-progress';
 
create table department(
    deptId int primary key,
    deptName varchar(100) not null,
    managerId int not null
);


CREATE TABLE task (
	taskId INT primary key auto_increment,
	taskName VARCHAR(100) NOT NULL,
	status VARCHAR(50) DEFAULT 'Unassigned',  
	description VARCHAR(300),
	startDate date,
	dueDate date,
	empId int,
	projectId int,
	foreign key(empId) REFERENCES employee(empId),
	foreign key(projectId) REFERENCES project(projectId)
);

alter table task alter status set default 'Unassigned';

insert into employee (name,email,password,phone,role,deptId,designation,managerId ) 
            values('Ajinkya','ajinkya@test.com','123456',9999999999,'manager',1,'Senior Executive',NULL); 
insert into employee (name,email,password,phone,role,deptId,designation,managerId ) 
            values('Rahul','rahul@test.com','123',9999999998,'manager',2,'Frontend web developer',NULL);
insert into employee (name,email,password,phone,role,deptId,designation,managerId ) 
            values('Priya','priya@test.com','456',9999999997,'manager',3,'Operations manager',NULL);
insert into employee (name,email,password,phone,role,deptId,designation,managerId ) 
            values('Gaurav','gaurav@test.com','789',9999999996,'admin',4,'Administrative officer',NULL);
insert into employee (name,email,password,phone,role,deptId,designation,managerId ) 
            values('Pragya','pragya@test.com','111',9999999995,'employee',1,'Java developer',101);	
			
--Project Queries
insert into project(projectName, projectDescription, startDate, dueDate) values('Skysports', 'Sports channel dashboard design', '2022-01-08', '2022-06-06');
update project set projectName='Unilever', projectDescription='database management', startDate='2021-12-08', dueDate='2022-05-04' where projectId=2;
insert into project(projectName, projectDescription, startDate, dueDate) values('Lenskart', 'CRM', '2022-02-11', '2022-07-05');
insert into project(projectName, projectDescription, startDate, dueDate) values('Dell', 'software development', '2022-02-28', '2022-07-08');

--Department Queries
insert into department values(1,'Backend',101);
insert into department values(2,'Frontend',102);
insert into department values(3,'Operations',103);
insert into department values(4,'Administration',104);

--Task Queries
insert into task(taskName,description,startDate,dueDate,empId,projectId) 
values('t1','Work distribution','2022-01-08','2022-06-06',101,1);
insert into task(taskName,description,startDate,dueDate,empId,projectId) 
values('t2','Work distribution','2022-01-08','2022-06-06',102,2);
insert into task(taskName,description,startDate,dueDate,empId,projectId) 
values('t3','Work distribution','2022-01-08','2022-06-06',102,3);
insert into task(taskName,description,startDate,dueDate,empId,projectId) 
values('t4','maintain employee records','2022-01-08','2022-06-06',102,4);
insert into task(taskName,description,startDate,dueDate,empId,projectId) 
values('t5','database creation','2022-01-08','2022-06-06',105,5);

--DeptProject Queries
insert into deptProject values(1,)


{
    "name": "Ajinkya",
    "email": "ajinkya@test.com",
    "password": "123456",
    "phone": "9999999999",
    "role": "manager",
    "deptId": 1,
    "designation": "Senior Executive",
    "managerId": null
}


--Employee/Manager: Ongoing Task Queries
select t.taskId, t.taskName, p.projectName, t.startDate,t.dueDate,t.status from task t
left join project p ON t.projectId =p.projectId;

 
--create table deptProject(
    deptId int,
    projectId int,
    foreign key(projectId) REFERENCES project(projectId),
    foreign key(deptId) REFERENCES department(deptId)
);
