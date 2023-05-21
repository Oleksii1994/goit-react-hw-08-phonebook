import { useAuth } from 'hooks';
import { FaPhoneSquare } from 'react-icons/fa';
import { LogoLink, HomeLink, ContactsLink } from './Navigation.styled';
import { useLocation } from 'react-router';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  return (
    <nav style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      {location.pathname === '/' ? (
        <LogoLink>
          <FaPhoneSquare
            style={{
              color: 'rgb(213 169 220)',
              width: '24px',
              height: '24px',
            }}
          />
          PhoneBook
        </LogoLink>
      ) : (
        <HomeLink to="/">Home</HomeLink>
      )}
      {isLoggedIn && <ContactsLink to="/contacts">Contacts</ContactsLink>}
    </nav>
  );
};
