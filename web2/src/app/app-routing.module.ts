import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarProdutosComponent } from './views/cadastrarPromocoes/cadastrar-produtos.component';
import { HomeComponent } from './views/home/home.component';
import { PromocoesComponent } from './views/promocoes/promocoes.component';


const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "promocoes",
  component: PromocoesComponent
}, {
  path: "cadastrarPromocoes",
  component: CadastrarProdutosComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
