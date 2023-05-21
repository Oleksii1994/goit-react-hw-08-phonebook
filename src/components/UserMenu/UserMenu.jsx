import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
// import css from './UserMenu.module.css';
import { Wrapper, LogOutBtn } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper /*className={css.wrapper}*/>
      <p /*className={css.username}*/>Welcome, {user.name}</p>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogOutBtn>
    </Wrapper>
  );
};
