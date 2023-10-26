import { Component, Input, Output, forwardRef, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Answer } from '../questions-player-value/constants/constants';

@Component({
  selector: 'app-btn-answer',
  templateUrl: './btn-answer.component.html',
  styleUrls: ['./btn-answer.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BtnAnswerComponent),
      multi: true,
    },
  ],
})
export class BtnAnswerComponent {
  @Input() answer: Answer = {} as Answer;
  @Input() index: number = 0;
  @Output() selectAnswer: EventEmitter<{index: number, answer: Answer}> = new EventEmitter<{index: number, answer: Answer}>();

  public innerValue: any;

  writeValue(value: any) {
    this.innerValue = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  // Método para manejar el click del botón y actualizar el valor
  onButtonClick() {
    console.log(this.answer.active);
    
    this.innerValue = this.answer.answersValue; // Cambia el valor del botón
    this.onChange(this.innerValue); // Notifica al formulario del cambio
    this.selectAnswer.emit({index: this.index, answer: this.answer});
  }
}
