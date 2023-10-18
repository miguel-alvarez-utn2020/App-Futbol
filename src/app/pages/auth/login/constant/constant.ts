export const INPUT_LOGIN = [
  {
    label: 'login.emailLabel',
    type: 'tel',
    fcName: 'email',
    endDebaunceTime: false,
    errors: [
      {
        typeError: 'email',
        label: 'login.emailError'
      },
      {
        typeError: 'required',
        label: 'login.requiredEmailError'
      },
    ]
  },
  {
    label: 'login.passwordLabel',
    type: 'password',
    fcName: 'password',
    endDebaunceTime: false,
    errors: [
      {
        typeError: 'required',
        label: 'login.passwordErrorRequired'
      },
    ]
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
