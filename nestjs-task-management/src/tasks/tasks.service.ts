import { Injectable, NotFoundException } from '@nestjs/common';
// import { Task, TaskStatus } from './task.model';
// import * as uuid from 'uuid'
import { CreateTaskDto } from './dto/create-task.dto';
import { getTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
import { User } from 'src/auth/user.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository,
    ) {}

    // get all task
    async getTasks(
        filterDto: getTasksFilterDto,
        user: User
        ): Promise<Task[]> {
        return this.taskRepository.getTasks(filterDto, user)
    }

    // get task by ID
    async getTaskById(
        id: number,
        user: User
        ) : Promise<Task> {
        const found = await this.taskRepository.findOne({ where: { id, userId: user.id } });

        if(!found){
            throw new NotFoundException(`Task with "${id}" not found`);
        }

        return found;
    }


    // eksekusi ke database dilakuakn oleh repository
    async createTask(
        createTaskDto: CreateTaskDto,
        user: User
        ): Promise<Task> { 
        return this.taskRepository.createTask(createTaskDto, user)
    }

    // delete task by ID
    async deleteTask(
        id: number,
        user: User
        ) : Promise<void> {
       const result = await this.taskRepository.delete({id, userId: user.id})

       if(result.affected === 0){
        throw new NotFoundException(`Task with "${id}" not found`);
    }

       console.log(result)
    }


    async updateTaskStatus(
        id: number, 
        status: TaskStatus,
        user: User
        ): Promise<Task> {  
        const task = await this.getTaskById(id, user)
        task.status = status;
        await task.save();
        return task;
    }

}
