import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputComponent),
        multi: true,
      },
    ],
  })
  export class InputComponent {
    @Input() label: string = '';
    @Input() type: string | undefined = undefined;
    @Input() placeholder: string | undefined = undefined;
    @Input() error: string | undefined = undefined;
    @Input() helper: string | undefined = undefined;

    // Valor interno del control
    private innerValue: any = '';

    // Función para actualizar el valor interno cuando cambia el valor del input
    onChange: any = () => {};
    onTouched: any = () => {};

    // Implementa las funciones de ControlValueAccessor
    writeValue(value: any) {
      this.innerValue = value;
    }
  
    registerOnChange(fn: any) {
      this.onChange = fn;
    }
  
    registerOnTouched(fn: any) {
      this.onTouched = fn;
    }
  
    // Método para emitir cambios al valor del control
    emitChanges() {
      this.onChange(this.innerValue);
    }
  
    // Manejar cambios en el input
    onInputChange(event: any) {
      this.innerValue = event.target.value;
      this.emitChanges();
    }
  }
