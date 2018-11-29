import { Component, OnInit } from '@angular/core';
import { ICurso, ITurno, Alumno } from 'src/app/models/alumno.model';
import { CURSOS, TURNOS } from 'src/app/models/cursos.data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'dev-form-md',
  templateUrl: './form-md.component.html',
  styleUrls: ['./form-md.component.css']
})
export class FormMdComponent implements OnInit {
  aCursos: Array<ICurso>;
  aTurnos: Array<ITurno>;
  formGroup: FormGroup;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.aCursos = CURSOS;
    this.aTurnos = TURNOS;
    this.formGroup = this.formBuilder.group({
      nombre: [null, [Validators.required, Validators.minLength(2)]],
      apellidos: [null, Validators.required],
      email: [null, Validators.required],
      isOk: [false],
      turno: [null, Validators.required],
      curso: [null , Validators.required]
    });
  }

  enviar(ev: Event) {
    console.log(this.formGroup.value);
  }

  get nombre() { return this.formGroup.get('nombre'); }
  get apellidos() { return this.formGroup.get('apellidos'); }
  get email() { return this.formGroup.get('email'); }
  get isOk() { return this.formGroup.get('isOk'); }
  get turno() { return this.formGroup.get('turno'); }
  get curso() { return this.formGroup.get('curso'); }
}
