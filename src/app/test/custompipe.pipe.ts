import { Pipe, PipeTransform } from '@angular/core';
import { $ } from 'protractor';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: string, param1: string): string {
    return `${param1 }${value}`;
  }

}
