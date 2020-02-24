import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
// import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { getTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}

    // // get all tasks
    // @Get()
    // getTasks(@Query(ValidationPipe) filterDto: getTasksFilterDto): Task[] {
    //     if(Object.keys(filterDto).length){
    //         console.log(filterDto)
    //         return this.tasksService.getTasksWithFilters(filterDto)
    //     }else {
    //         return this.tasksService.getAllTasks();
    //     }
    // }

    // get specific task by Id
    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
        return this.tasksService.getTaskById(id);
    }

    // create new task
    @Post()
    @UsePipes(ValidationPipe) // validate data using pipes in dto
    createTask(@Body() createTaskDto : CreateTaskDto): Promise<Task> {
        return this.tasksService.createTask(createTaskDto)
    }

    // delete task by id
    @Delete('/:id')
    deleteTask(@Param('id', ParseIntPipe) id: number) : Promise<void> {
        return this.tasksService.deleteTask(id)
    }

    // update status
    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: number,
        @Body('status', TaskStatusValidationPipe) status : TaskStatus) : Promise<Task> {
            return this.tasksService.updateTaskStatus(id, status);
    }

}
