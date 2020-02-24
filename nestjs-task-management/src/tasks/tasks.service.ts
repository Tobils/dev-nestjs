import { Injectable, NotFoundException } from '@nestjs/common';
// import { Task, TaskStatus } from './task.model';
// import * as uuid from 'uuid'
import { CreateTaskDto } from './dto/create-task.dto';
import { getTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository,
    ) {}

    // get task by ID
    async getTaskById(id: number) : Promise<Task> {
        const found = await this.taskRepository.findOne(id);

        if(!found){
            throw new NotFoundException(`Task with "${id}" not found`);
        }

        return found;
    }


    // eksekusi ke database dilakuakn oleh repository
    async createTask(createTaskDto: CreateTaskDto): Promise<Task> { 
        console.log(createTaskDto);
        return this.taskRepository.createTask(createTaskDto)
    }

    // delete task by ID
    async deleteTask(id: number) : Promise<void> {
       const result = await this.taskRepository.delete(id)
       console.log(result)
    }


    async updateTaskStatus(id: number, status: TaskStatus): Promise<Task> {
        const task = await this.getTaskById(id)
        task.status = status;
        await task.save();
        return task;
    }


    // private tasks : Task[] = []

    // // get all tasks 
    // getAllTasks(): Task[] {
    //     return this.tasks
    // }

    // // get status by filter and search
    // getTasksWithFilters(filterDto : getTasksFilterDto): Task[] {
    //     const { status, search } = filterDto;
    //     let tasks = this.getAllTasks();
    //     if(status){
    //         tasks = this.tasks.filter(task => task.status === status)
    //     }

    //     if(search){
    //         tasks = this.tasks.filter(task => 
    //             task.title.includes(search) ||
    //             task.description.includes(search)
    //             )
    //     }

    //     return tasks
    // }


    // // get task by id 
    // getTaskById(id: String) : Task {
    //     const found = this.tasks.find(task => task.id === id)

    //     // data not found
    //     if(!found){
    //         throw new NotFoundException(`task with id ${id} not found`)
    //     }

    //     return found;
    // }



  

    // // update status
    // updateTaskStatus(id: String, status: TaskStatus) : Task {
    //     let task = this.getTaskById(id);
    //     task.status = status
    //     return task
    // }
}
