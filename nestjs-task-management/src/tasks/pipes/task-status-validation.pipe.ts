import { PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";
// import { TaskStatus } from "../task.model";

export class TaskStatusValidationPipe implements PipeTransform{

    readonly allowedStatus = [
        // TaskStatus.OPEN,
        // TaskStatus.IN_PROGRESS,
        // TaskStatus.DONE
    ]

    transform(value: any, metadata: ArgumentMetadata)
    {
        value = value.toUpperCase();
        console.log('value ', value);
        console.log('metadata ', metadata);

        if(!this.isStatusValid(value)){
            throw new BadRequestException(`${value} is not valid status`)
        }

        return value;
    }

    private isStatusValid(status : any){
        const idx = this.allowedStatus.indexOf(status)
        return idx !== -1; // jika -1 makadata invalid
    }
}