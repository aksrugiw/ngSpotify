import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponentComponent } from './components/search-component/search-component.component';
import { AboutComponentComponent } from './components/about-component/about-component.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    AboutComponentComponent,
    NavbarComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
