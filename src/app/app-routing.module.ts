import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { EditThoughtComponent } from './components/thoughts/edit-thought/edit-thought.component';
import { ExcludeThoughtComponent } from './components/thoughts/exclude-thought/exclude-thought.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "listarPensamentos",
    pathMatch: "full",
  },
  {
    path: "criarPensamento",
    component: CreateThoughtComponent,
  },
  {
    path: "listarPensamentos",
    component: ListThoughtsComponent,
  },
  {
    path: "listarPensamentos/excluir/:id",
    component: ExcludeThoughtComponent,
  },
  {
    path: "listarPensamentos/editar/:id",
    component: EditThoughtComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
