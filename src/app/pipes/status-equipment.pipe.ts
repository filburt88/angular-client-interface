import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusEquipment'
})
export class StatusEquipmentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch ( value ) {
      case 1:
      case 2:
      case 3:
      case 4:

      return 'Pendiente de Reparación'

      case 5:
      case 6:
      case 7:
      case 8:
      case 9:

      return 'Equipo Reparado'

      default: 
          break;
   }
    return 'Pendiente';
  }

}
