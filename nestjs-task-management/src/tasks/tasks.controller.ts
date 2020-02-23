import { Controller, Get, Post, Body, Param, Delete, Patch, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { getTasksFilterDto } from './dto/get-tasks-filter.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}

    // get all tasks
    @Get()
    getTasks(@Query() filterDto: getTasksFilterDto): Task[] {
        if(Object.keys(filterDto).length){
            console.log(filterDto)
            return this.tasksService.getTasksWithFilters(filterDto)
        }else {
            return this.tasksService.getAllTasks();
        }
    }

    @Get('/:id')
    getTaskById(@Param('id') id: String): Task {
        return this.tasksService.getTaskById(id);
    }

    // create new task
    @Post()
    createTask(@Body() createTaskDto : CreateTaskDto): Task {
        return this.tasksService.createTask(createTaskDto)
    }

    // delete task by id
    @Delete('/:id')
    deleteTask(@Param('id') id: String): void {
        this.tasksService.deleteTask(id)
    }

    // update status
    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: String,
        @Body('status') status : TaskStatus) : Task {
        return this.tasksService.updateTaskStatus(id, status)
    }

}
