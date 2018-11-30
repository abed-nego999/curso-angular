import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Usuario } from 'src/app/models/usuarios.model';

@Component({
  selector: 'dev-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  oUser: Usuario;
  aUsers: Array<Usuario>;
  constructor(public usersSrv: UsersService) {
    this.aUsers = new Array<Usuario>();
  }

  ngOnInit() {
    this.oUser = new Usuario();
    this.getUsers();
  }

  getUser(id: string) {
    this.usersSrv.getUser(this.oUser.id).subscribe(
      (response: any) => {
        this.oUser = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getUsers() {
    this.usersSrv.getUsers().subscribe(
      (response: any) => { this.aUsers = response; }
    );
  }

  addUser() {
    if (!this.oUser.nombre) { return false; }
    this.usersSrv.addUser(this.oUser).subscribe(
      (response) => {
        console.log(response);
        this.getUsers();
      }
    );
  }

  modifyUser() {
    this.usersSrv.setUser(this.oUser.id, this.oUser).subscribe(
      (response) => {
        console.log(response);
        this.getUsers();
      }
    );
  }

  borrarUser() {
    this.usersSrv.deleteUser(this.oUser.id).subscribe(
      (response) => {
        this.getUsers();
      }
    );
  }
}
