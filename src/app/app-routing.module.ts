import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EditarComponent } from './cadastro/produtos/editar.component';
import { ExcluirComponent } from './cadastro/produtos/excluir.component';
import { IncluirComponent } from './cadastro/produtos/incluir.component';
import { ListarComponent } from './cadastro/produtos/listar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cadastro', component: CadastroComponent,
      children : [
        {path: "produtos" , component: ListarComponent},
        {path: "incluir", component: IncluirComponent},
        {path: "editar/:id", component: EditarComponent},
        {path: "excluir/:id", component: ExcluirComponent},
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
