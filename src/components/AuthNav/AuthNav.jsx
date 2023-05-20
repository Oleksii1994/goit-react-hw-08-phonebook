// import { NavLink } from 'react-router-dom';
// import css from './AuthNav.module.css';
import { RegisterLogInLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <RegisterLogInLink /*className={css.link}*/ to="/register">
        Register
      </RegisterLogInLink>
      <RegisterLogInLink /*className={css.link}*/ to="/login">
        Log In
      </RegisterLogInLink>
    </div>
  );
};
