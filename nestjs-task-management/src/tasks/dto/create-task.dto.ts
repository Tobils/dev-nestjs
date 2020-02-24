import { IsNotEmpty } from 'class-validator'

// create task dto 
export class CreateTaskDto{
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;
}