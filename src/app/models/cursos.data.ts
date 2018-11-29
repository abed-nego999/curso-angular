import { ICurso, ITurno } from './alumno.model';

export const CURSOS: Array<ICurso> = [
    {id: 'A', nombre: 'Angular', descripcion: 'Esto es un curso de ángulas con guindilla'},
    {id: 'R', nombre: 'React', descripcion: 'Este curso va de reaccionar'},
    {id: 'V', nombre: 'Vue', descripcion: 'Lo de vue no lo conoce ni su pota madre'}
  ];

export const TURNOS: Array<ITurno> = [
  {id: 'M', nombre: 'Mañana', horario: '09:00-13:00'},
  {id: 'T', nombre: 'Tarde', horario: '15:00-19:00'},
  {id: 'N', nombre: 'Noche', horario: '18:00-22:00'}
];
