import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
// import css from './LoginForm.module.css';
import {
  LogInForm,
  LoginLabel,
  LoginInput,
  LoginSubmitButton,
  LoginContainer,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginContainer>
      <LogInForm
        /*className={css.form}*/ onSubmit={handleSubmit}
        autoComplete="off"
      >
        <LoginLabel /*className={css.label}*/>
          Email
          <LoginInput type="email" name="email" />
        </LoginLabel>
        <LoginLabel /*className={css.label}*/>
          Password
          <LoginInput type="password" name="password" />
        </LoginLabel>
        <LoginSubmitButton type="submit">Log In</LoginSubmitButton>
      </LogInForm>
    </LoginContainer>
  );
};
