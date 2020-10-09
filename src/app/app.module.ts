import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { rootRouterConfig } from './app.routes';
import { FooterComponent } from './navigation/footer/footer.component';
import { HomeComponent } from './navigation/home/home.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { CpfComponent } from './projects/cpf/cpf.component';
import { ExemploComponent } from './teste/exemplo/exemplo.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    CpfComponent,
    ExemploComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })]
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    MenuComponent,
    CpfComponent]
})
export class AppModule { }
