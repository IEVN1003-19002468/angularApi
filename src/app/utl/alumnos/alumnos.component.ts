import { Component,  OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlumnoFilterPipe } from '../alumnos-filter.pipe';
import { CommonModule } from '@angular/common';
import { Utl } from '../utl';
import { ProyectoapiService } from '../proyecto-api.service';
import { RouterLink } from '@angular/router';
 
 
 
 
@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [FormsModule,AlumnoFilterPipe, CommonModule,RouterLink],
 
  templateUrl: './alumnos.component.html',
  styles: ``
})
export default class AlumnosComponent implements OnInit {
 
 
  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string=''
  alumnoTitle!:string
  dataSource:any=[];
  constructor(public Utl:ProyectoapiService){}
 
  showImage():void{
    this.muestraImg=!this.muestraImg;
  }
 
  alumnosIric:Utl[]=[
    {
      matricula:1234,
      nombre:'pedro',
      apaterno:'lopez',
      amaterno:'muñoz',
      correo: 'pedro@gmail.com',
 
    },
    {
      matricula:772,
      nombre:'Paulina',
      apaterno:'lopez',
      amaterno:'muñoz',
      correo: 'paulina@gmail.com',
    },
 
    {
      matricula:22,
      nombre:'Dario',
      apaterno:'lopez',
      amaterno:'muñoz',
      correo: 'dario@gmail.com',
 
    },
  ]
 
  onCalificaClick(message:string){
    this.alumnoTitle=` ${message}`;
 
  }
  ngOnInit(): void {
     this.Utl.getAlumnos().subscribe(
      {
        next: response=>{
 
      this.dataSource=response;
 
    },
    error: error=>console.log(error)
  }
    );
 
}
 
}