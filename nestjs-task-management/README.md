<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Create Project

```bash
# create project named nestjs-task-management
$ nest new nestjs-task-management
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Module
```bash
# module didefinsikan dengan annotation @Module()
# module singleton : dapat digunakan dimana ajah

# generate task module
$ nest g module tasks
```

## Controller
```bash
# Controller define

# AuthController /auth
# signin()
# POST /auth/signin
# signout()
# POST /auth/signout

# TasksController /tasks
# getAllTasks()
# Get /tasks
# getTasksById()
# Get /tasks/:id
# createTask()
# POST /tasks
# deleteTask()
# DELETE /tasks/:id
# updateTaskStatus()
# PATCH /tasks/:id
 
# UsersController /users
# getUsers()
# GET /users/:id
# createUser()
# POST /users
# deleteUser()
# DELETE /users/:id

# generate controller
$ nest g controller tasks --no-spec
```

## Provider dan Service
```md
# Provider
- dapat di inject ke dalam controller dengan annotasi @Injectable
- harus disediakan ke module untuk module itu sendiri
- dapat di export dari module dan digunakan/import oleh module lainnya

# Service
- didefinisikan sebagai provider, tidak semua provider adalah service
- source utama untuk urusan logika,  sebagai contoh  service akan dipanggil oleh controller
untuk validasi data, membuat item ke database, dan mengembalikan nilai response
- @Injectable memungkinkan untuk diinject ke module lainnya.
- dengan menggunakan service, struktur program menjadi lebih rapih, karena di controller kita hanya mengakses service yang sudah di definisikan

# generate task service
$ nest g service tasks --no-spec
```

## Task
```bash
# menambahkan uuid untuk model Task
$ npm install --save uuid 
```

## Controller
```js
// Lesson 14. creating task {service dan controller}
// create new task cara pertama, 
@Post()
createTask(@Body() body){
    console.log('body : ', body)
}
// body :  { title: 'test title', description: 'test decsription' }


// create new task cara kedua dengan spesifik
@Post()
createTask(
    @Body('title') title:String,
    @Body('description') description:String
    ){
    console.log('title : ', title)
    console.log('description : ', description);
}
// title :  test title
// description :  test decsription
```

## Data Trnasfer Object
```bash
# problem nya : we lose sense of reliability of data
# we don not have a unified a way to define the data looks like for all the process
# A Data Transfer Object (DTO) an object that carries data between proceses.
# DTO can be usefull for validation
# a DTO is not a model definition. It defines the shape of data for a specific data, for example - creating a task
# can be define  using an interface or a class
```

## Implementasi DTO
```js
// change controller  create new task
@Post()
createTask(
    @Body('title') title:String,
    @Body('description') description:String
    ): Task {
    return this.tasksService.createTask(title, description)
}

// menjadi create new task
@Post()
createTask(@Body() createTaskDto : CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto)
}
```

## Searching dan Filtering
```bash
# Learn 22
# modify service dan menambahkan DTO get-task-filter.dto.ts untuk status dan search variable
```

## NetsJs pipes
```bash
# pipe operate on the argument to be processed by routes handler, just before the handler is called.
# pipe can perform data transformation or data validation
# pipe can be asynchronous
# usefull pipe with @nestjs/common


# digunakan untuk validasi data, data tidak boleh kosong
# install package
$ npm install class-validator class-transformer --save
```

## Postgre with docker
1. define docker compose postgre
```yml
version: '3'
services: 
    db:
        image: postgres
        ports:
            - "5432:5432"
        expose:
            - "5432"
        environment:
            POSTGRES_ROOT_PASSWORD: password
            POSTGRES_DB: taskmanagement
            POSTGRES_USER: tobil
            POSTGRES_PASSWORD: root
```
2. run docker compose : `docker-compose up -d`


## Object Relational Mapping (ORM)
```bash
# ORM is a technique that lets you query and manipulate data from a database, using an object-oriented paradigm.
# install typeorm
$ npm install --save @nestjs/typeorm typeorm pg

# auto load entities dengan menambahkan autoLoadEntities: true, pada file typeorm.config.ts
```
