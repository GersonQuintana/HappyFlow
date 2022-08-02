import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { CodemirrorModule } from '../lib/public_api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { EditorComponent } from './components/editor/editor.component';
import { ErrorTableComponent } from './components/error-table/error-table.component';
import { SymbolTableComponent } from './components/symbol-table/symbol-table.component';
import { DBTableComponent } from './components/db-table/db-table.component';
import { DbComponent } from './components/db/db.component';

import { EditorService } from './services/editor.service'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EditorComponent,
    ErrorTableComponent,
    SymbolTableComponent,
    DBTableComponent,
    DbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CodemirrorModule
  ],
  providers: [
    EditorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
