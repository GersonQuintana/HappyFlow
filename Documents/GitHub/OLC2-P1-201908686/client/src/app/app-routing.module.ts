import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DBTableComponent } from './components/db-table/db-table.component';
import { DbComponent } from './components/db/db.component';
import { EditorComponent } from './components/editor/editor.component';
import { ErrorTableComponent } from './components/error-table/error-table.component';
import { SymbolTableComponent } from './components/symbol-table/symbol-table.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/editor',
    pathMatch: 'full'
  },
  {
    path: 'editor',
    component: EditorComponent
  },
  {
    path: 'reporte/tabla_simbolos',
    component: SymbolTableComponent
  },
  {
    path: 'reporte/tabla_errores',
    component: ErrorTableComponent
  },
  {
    path: 'reporte/bases_datos',
    component: DbComponent
  },
  {
    path: 'reporte/tablas_bd',
    component: DBTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
