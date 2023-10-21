import { createAction, props } from '@ngrx/store';
import { CreateUser, User, UserLogin } from '../../pages/domain/models/User';

export const login = createAction(
  '[Auth] Login',
  props<{ credentials: UserLogin }>()
);

export const loginSuccess = createAction('[Auth] Login Success');

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

export const register = createAction(
  '[Auth] Register',
  props<{ userCreate: CreateUser }>()
);

export const registerSuccess = createAction('[Auth] Register Success');
export const registerFailure = createAction(
    '[Auth] Register Failure',
    props<{ error: any }>()
  );

export const logout = createAction('[Auth] Logout');
export const logoutSuccess = createAction('[Auth] Logout Success');
