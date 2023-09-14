import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent {

  public innerValue: any = true;

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
    console.log(this.innerValue);
    
  }
}
