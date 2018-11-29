import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Alumno, ICurso, ITurno } from 'src/app/models/alumno.model';
import { CURSOS, TURNOS } from 'src/app/models/cursos.data';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'dev-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent implements OnInit {
  oAlumno: Alumno;
  aCursos: Array<ICurso>;
  aTurnos: Array<ITurno>;
  @ViewChild('miFormulario')
  miForm: NgForm;
  constructor() { }

  ngOnInit() {
    this.oAlumno = new Alumno();
    this.aCursos = CURSOS;
    this.aTurnos = TURNOS;
    console.log(this.miForm);
  }

  enviar(ev: Event) {
    console.log(ev);
    ev.preventDefault();
    // TODO sustituir console.log por el envío del formulario
    console.log(this.oAlumno);
  }
}
