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
assignment_status  varchar(100)); 

alter table employee auto_increment=101;

insert into employee (name,email,password,role,dept_id,designation,manager_id ,assignment_status) 
            values('hks','hks@test.com','123456','manager','1','CA',102,'complete'); 


CREATE TABLE project (
 project_id INT primary key auto_increment,
 project_name VARCHAR(100),
 status VARCHAR(50) NOT NULL, 
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