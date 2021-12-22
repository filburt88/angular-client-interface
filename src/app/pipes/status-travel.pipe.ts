import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusTravelPipe'
})
export class StatusTravelPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch ( value ) {
      case 1:

      return 'Retiro a Domicilio'

      case 2:

      return 'Cadete Asignado'

      case 3:

      return 'Equipo Retirado'

      case 4:

      return 'En el Laboratorio'
  
      case 5:

      return 'Equipo Listo'

      case 6:

      return 'Cadete Asignado'

      case 7:

      return 'Entrega a Domicilio'

      case 8:

      return 'Entregado en Domicilio'

      case 9:

      return 'Aceptado Cliente'

      default: 
          break;
   }
    return 'Pendiente';
  }

}
