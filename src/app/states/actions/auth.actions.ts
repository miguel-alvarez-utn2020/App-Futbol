import { createAction, props } from '@ngrx/store';
import { CreateUser, User, UserLogin } from '../../pages/domain/models/User';

export const login = createAction(
  '[Login] Login',
  props<{ credentials: UserLogin }>()
);

export const loginSuccess = createAction('[Auth] Login Success');

export const loginFailure = createAction(
  '[Login] Login Failure',
  props<{ error: any }>()
);

export const register = createAction(
  '[Register] Register',
  props<{ userCreate: CreateUser }>()
);

export const registerSuccess = createAction('[Auth] Register Success');
export const registerFailure = createAction(
    '[Register] Register Failure',
    props<{ error: any }>()
  );

export const logout = createAction('[App] Logout');
export const logoutSuccess = createAction('[App] Logout Success');
