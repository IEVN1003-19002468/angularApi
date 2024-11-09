//import { HttpClient } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utl } from './utl';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ProyectoapiService {
 
  constructor(private  http: HttpClient) { }
 
 
public getAlumnos():Observable<Utl[]>{
  return this.http.get<Utl[]>('http://127.0.0.1:5000/alumnos')
}
 
agregarNuevoAlumno(datos:Utl){
  return this.http.post('http://127.0.0.1:5000/alumnos',datos)
}
 
public getAlumno(mat:number):Observable<Utl>{
  console.log(mat)
  return this.http.get<Utl>('http://127.0.0.1:5000/alumnos/'+mat)
}
 
modificarAlumno(mat:number,datos:Utl){
  return this.http.put('http://127.0.0.1:5000/alumnos/'+mat,datos)
}
public EliminaAlumno(mat:number):Observable<Utl>{
  return this.http.delete<Utl>('http://127.0.0.1:5000/alumnos/'+mat)
}
 
}