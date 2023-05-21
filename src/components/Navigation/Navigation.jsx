// import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
// import css from './Navigation.module.css';
import { HomeLink, ContactsLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <HomeLink to="/">Home</HomeLink>
      {isLoggedIn && <ContactsLink to="/contacts">Contacts</ContactsLink>}
    </nav>
  );
};
