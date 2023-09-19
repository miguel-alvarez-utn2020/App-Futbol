export const INPUT_LOGIN = [
  {
    label: 'login.phoneLabel',
    type: 'tel',
    fcName: 'phone',
    errorLabel: 'login.localError',
  },
  {
    label: 'login.passwordLabel',
    type: 'password',
    fcName: 'password',
  },
];

export const BUTTONS_LOGIN = {
  label: 'login.buttonLabelLogin',
  expand: 'block',
  color: 'primary'
};

export const BUTTONS_REGISTER = {
  label: 'login.buttonLabelRegister',
  expand: 'block',
  color: 'secondary',
};

export const ERROR_LOGIN_BACKEND = 'login.errorLoginBackend';