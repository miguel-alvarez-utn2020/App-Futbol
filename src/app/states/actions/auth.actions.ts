import { createAction, props } from '@ngrx/store';
import { User, UserLogin } from '../../pages/domain/models/User';

export const login = createAction(
  '[Auth Login] Login',
  props<{ credentials: UserLogin }>()
);

export const loginSuccess = createAction('[Auth] Login Success');

// Acción de fallo de inicio de sesión
export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>() // Puedes ajustar el tipo de dato para el error según tus necesidades
);
