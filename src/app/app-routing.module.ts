import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TasksComponent } from './tasks/tasks.component';
import { BlogComponent } from './blog/blog.component';
import { CursosComponent } from './cursos/cursos.component';
import { BooksComponent } from './books/books.component';
import { UsersComponent } from './users/users.component'; */

const routes: Routes = [
  /* { path: 'home', component: HomeComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'cursos', component: CursosComponent  },
  { path: 'books', component: BooksComponent  },
  { path: 'users', component: UsersComponent  },
  { path: 'about', component: AboutComponent }, */
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'tasks', loadChildren: './tasks/tasks.module#TasksModule' },
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
  { path: 'cursos', loadChildren: './cursos/cursos.module#CursosModule'  },
  { path: 'books', loadChildren: './books/books.module#BooksModule'  },
  { path: 'users', loadChildren: './users/users.module#UsersModule'  },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
