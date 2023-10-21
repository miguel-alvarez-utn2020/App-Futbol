import { createAction, props } from '@ngrx/store';
import { User } from '../../pages/domain/models/User';

export const loadUser = createAction(
  '[Login Component] Load User',
  props<{ user: User }>()
);
