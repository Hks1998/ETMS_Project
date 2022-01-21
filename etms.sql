create table employee(emp_id int primary key auto_increment ,
name  varchar(100)  not null , 
email  varchar(100) not null unique,
password  varchar(512) not null unique,
phone bigint unique ,
role  varchar(50) ,
dept_id   int ,
designation   varchar(50) ,
mgr_id   int,
assignment_status  varchar(100)); 

alter table employee auto_increment=101;

insert into employee (name,email,password,role,department,designation,mgr_id ,assignment_status) values('hks','hks@test.com','123456','manager','1','CA',102,'complete'); 


CREATE TABLE project (project_id INT primary key auto_increment ,
project_name VARCHAR(100) ,
 status VARCHAR(50) , 
 project_description VARCHAR(300),
 start_date date ,
 due_date date );
 
 alter table project auto_increment 1;
 
 