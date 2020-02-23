import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}

    // get all array Task[]
    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    // create new task
    @Post()
    createTask(
        @Body('title') title:String,
        @Body('description') description:String
        ): Task {
        return this.tasksService.createTask(title, description)
    }
}
