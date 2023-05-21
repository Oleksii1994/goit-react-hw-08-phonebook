import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';
import { FaPhoneSquare } from 'react-icons/fa';
import { HomeLink, ContactsLink } from './Navigation.styled';
import { useLocation } from 'react-router';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const currentLocation = useLocation();
  console.log(currentLocation.pathname);
  return (
    <nav style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      {currentLocation.pathname === '/' ? (
        <a
          href="/"
          disabled
          style={{
            color: 'rgb(190 127 175)',
            cursor: 'unset',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            padding: '8px',
            textShadow:
              'rgb(255 255 255 / 67%) 0px 0px 1px, rgb(0 0 0) 0px 0px 1px, rgb(255 255 255 / 0%) 0px 0px 8px, rgb(17 0 255 / 78%) 0px 0px 12px, rgb(199 0 255 / 0%) 0px 0px 82px, rgb(197 0 255) 0px 0px 72px, rgb(226 0 255 / 0%) 0px 0px 102px, rgb(255 0 233) 0px 0px 151px',
          }}
        >
          <FaPhoneSquare
            style={{
              color: 'rgb(213 169 220)',

              width: '24px',
              height: '24px',
            }}
          />
          PhoneBook
        </a>
      ) : (
        <HomeLink to="/">Home</HomeLink>
      )}
      {isLoggedIn && <ContactsLink to="/contacts">Contacts</ContactsLink>}
    </nav>
  );
};
