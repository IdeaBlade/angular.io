// #docregion
import { AuthGuard }          from './auth.guard';
import { AuthService }        from './auth.service';
import { LoginComponent }     from './login.component';

export const LOGIN_ROUTES = [
  { path: 'login', component: LoginComponent }
];

export const LOGIN_COMPONENTS = [
  LoginComponent
];

export const AUTH_PROVIDERS = [AuthGuard, AuthService];
