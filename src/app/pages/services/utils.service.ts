import { Injectable, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable, debounceTime, forkJoin, map } from 'rxjs';
import { ToastService } from '../../services/shared/toast.service';
import { PredefinedColors } from 'src/app/interfaces/toast';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private translate = inject(TranslateService)
  private toastService = inject(ToastService)
  constructor() { }

  checkFormErrors(form: FormGroup){
    return form.valueChanges.pipe(
      debounceTime(1000),
      map(() => true)
    );  
  }

  showToast(message: string, typeColorToast: PredefinedColors){
    this.translate.get(message).subscribe({
      next: (translateText) => {
        this.toastService.showToast(translateText, typeColorToast);
      },
    });
  }

  translateMessage(message: string){
    this.translate.get(message).subscribe({
      next: (translateText) => {
        return translateText
      },
    });
  }

  translateMessages(messages: string[]): Observable<string[]> {
    const translateObservables: Observable<string>[] = messages.map((message) =>
      this.translate.get(message)
    );
    return forkJoin(translateObservables);
  }

}
