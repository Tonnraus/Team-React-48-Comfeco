import { Login, LoginErrors } from "../interfaces";

export default function loginValidator(values: Login) {
  let errors: LoginErrors = {
    email: null,
    password: null
  };

  if(!values.email) {
    errors.email = 'Email is required';
  }else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ) {
    errors.email = "Email no válido"
  }

  if(!values.password) {
    errors.password = 'Password is required';
  }else if(values.password.length < 6) {
    errors.password = 'Pasword must be at least 6 characters long';
  }
}