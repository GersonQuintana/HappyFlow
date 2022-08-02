import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Codigo } from '../models/Codigo'

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  API_URI = 'http://localhost:4000'

  constructor(private http:HttpClient) { }

  ejecutar(codigo:any){
    return this.http.post(`${this.API_URI}/ejecutar`, {'codigo': codigo})
  }

  getTablaSimbolos() {
    return this.http.get(`${this.API_URI}/tabla_simbolos`)
  }

  getTablaErrores() {
    return this.http.get(`${this.API_URI}/tabla_errores`)
  }

  getBasesDatos() {
    return this.http.get(`${this.API_URI}/base_datos`)
  }

  getTablasBaseDatos() {
    return this.http.get(`${this.API_URI}/tablas_base_datos`)
  }
}
