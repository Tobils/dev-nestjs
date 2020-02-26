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

    // get all task
    async getTasks(filterDto: getTasksFilterDto): Promise<Task[]> {
        return this.taskRepository.getTasks(filterDto)
    }

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

}
