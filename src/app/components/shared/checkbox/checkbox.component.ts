import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

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

  public innerValue: boolean = false; // Inicialmente, el checkbox estará desmarcado
  @Input() label: string = 'label'
  @Input() slot: string = 'start'
  onChange: any = () => {};
  onTouched: any = () => {};

  // Implementa las funciones de ControlValueAccessor
  writeValue(value: any) {
    if (typeof value === 'boolean') {
      this.innerValue = value;
    }
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
    this.innerValue = event.target.checked;
    this.emitChanges();
  }
}