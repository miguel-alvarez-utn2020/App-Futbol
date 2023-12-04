

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


export class Persona {
  public nombre;
    constructor(nombre: string){
      this.nombre = nombre;
    }
    respirar(){
      console.log('respirando');
      
    }
}

export class Guerrero extends Persona{
    public arma;
    public type;
    constructor(nombre: string, arma: string, type:string){
      super(nombre);
      this.arma = arma;
      this.type = type;
    }

    atacar(){
      console.log('Atacando');
      
    }
}

const arr: Persona[] = [];

const persona: Persona = new Guerrero('Konan', 'espada', 'guerrero');
const persona2: Persona = new Persona('okey');
const persona3 = persona as Guerrero;
arr.push(persona) 
arr.push(persona3)
const guerrero =  arr.find((g: any) => g.type === 'guerrero') as Guerrero
console.log(guerrero);




