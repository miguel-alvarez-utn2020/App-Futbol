export const INPUT_REGISTER = [
    {
      label: 'register.emailLabel',
      type: 'tel',
      fcName: 'email',
      endDebaunceTime: false,
      errors: [
        {
          typeError: 'email',
          label: 'register.emailError'
        },
        {
          typeError: 'required',
          label: 'register.requiredEmailError'
        },
      ]
    },
    {
      label: 'register.passwordLabel',
      type: 'password',
      fcName: 'password',
      endDebaunceTime: false,
      errors: [
        {
          typeError: 'required',
          label: 'register.passwordErrorRequired'
        },
      ]
    },
    {
      label: 'name',
      type: 'text',
      fcName: 'name',
      endDebaunceTime: false,
      errors: [
        {
          typeError: 'required',
          label: 'nameRequiredError'
        },
      ]
    },
    {
      label: 'lastName',
      type: 'text',
      fcName: 'lastname',
      endDebaunceTime: false,
      errors: [
        {
          typeError: 'required',
          label: 'lastnameRequiredError'
        },
      ]
    },
    {
      label: 'age',
      type: 'number',
      fcName: 'age',
      endDebaunceTime: false,
      errors: [
        {
          typeError: 'required',
          label: 'ageRequiredError'
        },
      ]
    }
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
  
  
  export const ERROR_REGISTER_BACKEND = 'register.errorRegisterBackend';