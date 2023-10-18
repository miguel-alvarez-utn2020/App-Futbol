import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { debounceTime, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormErrorsService {

  constructor() { }

  checkFormErrors(form: FormGroup){
    return form.valueChanges.pipe(
      debounceTime(1000),
      map(() => true)
    );  
  }
}
