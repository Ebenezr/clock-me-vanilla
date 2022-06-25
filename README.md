# CLOCK-ME

---

### Author : BUKOSIA EBENEZAR

---

## Project Description

Clock-me: is is a web application used to keep track of employees and thier clock-in and clock out time and also calculates their salary based on total clocked time

---

## SCREENSHOTS

---

## Table of content

- [Technologies](#description)
- [Description](#description)
- [Features](#features)
- [Setup-process](#setup_process)
- [Project-usage](#project-usage)
- [Copyright](#copyright)
- [Licence](#licence)

---

## Technologies

languages used are:

- HTML :HTML5 -which is used to create the structure of thr page
- CSS :CSS4 -used to style the page
- JavaScript:ES6 -used to code app logic

---

### Features

As a user you ase able to:
1 login with database credential
2 view other employees profiles
3 view other employees last seen
4 clock in when he/she reports to work and clock in the evining
5 admin can update employees details
6 admin can add or remove an employee from the system

---

### description

This web application helps to solve the problem of tracing employees working time. This can be very essential espesialy jobs that pays thier employees on hourly basis.
the application is also beneficial to a any company since it enables them track thier working times of thier employees and know how to optimize make thiem efficient.
the application solve this such as recoding each day's clock-in and clock-out timestamp and record it in the database as string array. the application then uses the timestamps to calculate how many hours the employee has been working and compute the employees salary.

---

### challenges

The major challenge I faced was manipulating timestamps, recording the timestamps it the database and retiving the timestamps in the correct datatypes so as to be used in computations.

---

## How to set up and run the project

### Requirements

- [npm](https://www.npmjs.com/)
- Text editor eg [Visual Studio Code](https://code.visualstudio.com/download)

---

## Dependencies

- npm

---

#### setup

clone the repo using the command

- $git clone https://github.com/Ebenezr/clock-me.git
- change into directory using command
- `$cd clock-me`
- open the code in vs code with command
- `code .`
- install json server using the command
- ``npm install -g json-server`
- start the json server
- `json-server assets/db/db.json`
- use live server to run the front end
- use any credention from the json server to login

---

## How to use the project

The project root folder contains two files, main **index.html** and **README.md** file and one folder assets folder. the assets folder within it are four folders **css** which contains css files and **images** folder which contains images, **JS** which contains JavaScript files and **DB** folder containing json database file.

---

### Contributing to project

- Fork the repo

* Create a new branch in your terminal (git checkout -b improve-feature)
* Install the prerequisites
* Make appropriate changes in file(s)
* Run the server to see the changes
* Add the changes and commit them (git commit -am "Improve App")
* Push to the branch (git push origin improve-app)
* Create a Pull request

---

## Copyright

Copyright(c)[2022][bukosia ebenezar]

---

## Contact Information

- Email : ebenezarbukosia@gmail.om

---

## [License](LICENSE)

MIT License
Copyright (c) 2022 Bukosia Ebenezar
