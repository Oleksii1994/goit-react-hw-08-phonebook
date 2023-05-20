import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
// import css from './Navigation.module.css';
import { HomeLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <HomeLink to="/">Home</HomeLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
