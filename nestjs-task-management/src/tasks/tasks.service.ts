import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import * as uuid from 'uuid'
import { CreateTaskDto } from './dto/create-task.dto';
import { getTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
    private tasks : Task[] = []

    // get all tasks 
    getAllTasks(): Task[] {
        return this.tasks
    }

    // get status by filter and search
    getTasksWithFilters(filterDto : getTasksFilterDto): Task[] {
        const { status, search } = filterDto;

        let tasks = this.getAllTasks();

        if(status){
            tasks = this.tasks.filter(task => task.status === status)
        }

        if(search){
            tasks = this.tasks.filter(task => 
                task.title.includes(search) ||
                task.description.includes(search)
                )
        }

        return tasks
    }


    // get task by id 
    getTaskById(id: String) : Task {
        return this.tasks.find(task => task.id === id)
    }

    // data dto dilewatkan dari controller
    createTask( createTaskDto : CreateTaskDto ): Task {
        const { title, description } = createTaskDto;
        const task : Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN
        }

        this.tasks.push(task);
        return task;
    }

    // delete task by ID
    deleteTask(id: String) : void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    // update status
    updateTaskStatus(id: String, status: TaskStatus) : Task {
        let task = this.getTaskById(id);
        task.status = status
        return task
    }
}
