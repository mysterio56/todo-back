DROP DATABASE IF EXISTS todo_db;   
CREATE DATABASE IF NOT EXISTS todo_db;   
USE todo_db; 

DROP TABLE IF EXISTS todo; 

CREATE TABLE IF NOT EXISTS todo 
  ( 
     id         INT(10) PRIMARY KEY auto_increment, 
     description   TEXT NOT NULL, 
     title   VARCHAR(255) NOT NULL, 
     created DATETIME NOT NULL, 
     completed  TINYINT(1) NOT NULL
  ); 
