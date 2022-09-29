import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';
import { FormComponent } from './form/form.component';
import { SelecaoComponent } from './selecao/selecao.component';

const routes: Routes = [
  {
    path: '',
    component: SelecaoComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'contador',
    component: ContadorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
