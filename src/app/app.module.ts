import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from 'products/products.component';
import { TemplateBinding } from '@angular/compiler/src/expression_parser/ast';
import { TemplatComponent } from 'template/template.component';
import { ProductsService } from 'products/products.service';

@NgModule({
  declarations: [
    AppComponent, ProductsComponent, TemplatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
