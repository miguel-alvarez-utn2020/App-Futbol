import { Injectable, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { debounceTime, map } from 'rxjs';
import { ToastService } from '../../services/shared/toast.service';
import { PredefinedColors } from 'src/app/interfaces/toast';
import { ERRORS } from '../constants/translates.errors';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorsService {
  private utilsService = inject(UtilsService);
  private errorType: any[] = ERRORS;
  constructor() {}

  showError(
    status: number,
    actionName: string,
    typeColorToas: PredefinedColors
  ) {
    const { errorMessage } = this.errorType.find(
      (c) => c.status === status && c.actionName === actionName
    );
    this.utilsService.showToast(errorMessage, typeColorToas);
  }
}
