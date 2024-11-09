import { Pipe, PipeTransform } from '@angular/core';
import { Utl } from './utl';
 
@Pipe({
  name: 'alumnoFilter',
  standalone: true
})
export class AlumnoFilterPipe implements PipeTransform {
 
  transform(value: Utl[], args: string): Utl[] {
    let filter:string=args ?args.toLocaleLowerCase():'';
 
    return filter? value.filter((alumno:Utl)=>
    alumno.nombre.toLocaleLowerCase().indexOf(filter)!=-1
    ):value;
  }
 
}