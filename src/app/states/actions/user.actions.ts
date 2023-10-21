import { createAction, props } from '@ngrx/store';
import { User } from '../../pages/domain/models/User';

export const loadUser = createAction(
  '[User] Load User',
  props<{ user: User }>()
);

export const removeUser = createAction('[User] Remove User');
