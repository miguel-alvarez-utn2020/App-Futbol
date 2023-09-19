export const INPUT_REGISTER = [
    {
      label: 'register.phoneLabel',
      type: 'tel',
      fcName: 'phone',
      errorLabel: 'login.localError',
    },
    {
      label: 'register.passwordLabel',
      type: 'password',
      fcName: 'password',
    },
    {
      label: 'name',
      type: 'text',
      fcName: 'name',
    },
    {
      label: 'lastName',
      type: 'text',
      fcName: 'lastName',
    },
    {
      label: 'age',
      type: 'number',
      fcName: 'age',
    },
  ];
  
  export const BUTTONS_REGISTER = {
    label: 'register.buttonLabelRegister',
    expand: 'block',
    color: 'secondary'
  };

  export const BUTTONS_LOGIN = {
    label: 'login.buttonLabelLogin',
    expand: 'block',
    color: 'primary'
  };
  
  
  export const ERROR_LOGIN_BACKEND = 'login.errorLoginBackend';