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
        multi: true
      }
    ]
  })
  export class InputComponent {
    @Input() label: string = '';
    @Input() type: string | undefined = undefined;
    @Input() placeholder: string | undefined = undefined;
    @Input() error: string | undefined = undefined;
    @Input() helper: string | undefined = undefined;
    value: any;

    // Métodos para el ControlValueAccessor
    onChange: any = () => {};
    onTouched: any = () => {};
  
    writeValue(value: any): void {
      this.value = value;
    }
  
    registerOnChange(fn: any): void {
      this.onChange = fn;
    }
  
    registerOnTouched(fn: any): void {
      this.onTouched = fn;
    }
  
    setDisabledState(isDisabled: boolean): void {
      // Implementa si necesitas manejar el estado de deshabilitado
    }
  
    valueChanged(event: any) {
      this.value = event.detail.value;
      this.onChange(event.detail.value);
      this.onTouched();
    }
  }
