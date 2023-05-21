import { RegisterLogInLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <RegisterLogInLink to="/register">Register</RegisterLogInLink>
      <RegisterLogInLink to="/login">Log In</RegisterLogInLink>
    </div>
  );
};
