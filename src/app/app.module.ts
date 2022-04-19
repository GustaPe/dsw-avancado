import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Components
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CardComponent } from './card/card.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

//Import modules
import { HttpClientModule } from '@angular/common/http';
import { EditarComponent } from './cadastro/produtos/editar.component';
import { ExcluirComponent } from './cadastro/produtos/excluir.component';
import { IncluirComponent } from './cadastro/produtos/incluir.component';
import { ListarComponent } from './cadastro/produtos/listar.component';



@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSliderModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    CadastroComponent,
    CardComponent,
    EditarComponent,
    ExcluirComponent,
    IncluirComponent,
    ListarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
