import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
// import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { getTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
import { AuthGuard } from '@nestjs/passport';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
    constructor(private tasksService: TasksService){}

    // get all tasks
    @Get()
    getTasks(@Query(ValidationPipe) filterDto: getTasksFilterDto): Promise<Task[]> {
       return this.tasksService.getTasks(filterDto);
    }

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
