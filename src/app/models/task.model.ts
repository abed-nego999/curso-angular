export interface ITask {
    nombre: string;
    isCompleted: boolean;
}

export class Task implements ITask {
    constructor(
        public nombre: string = '',
        public isCompleted: boolean = false
    ) {}
}
