// .link {
//   display: inline-block;
//   text-decoration: none;
//   padding: 12px;
//   font-weight: 700;
//   color: #2a363b;
// }

// .link.active {
//   color: #e84a5f;
// }
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const RegisterLogInLink = styled(NavLink)`
  height: 32px;
  margin: 0;
  line-height: 43px;
  padding: 10px 40px;

  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  border-radius: 5px;

  &:hover {
    color: #fff;
    background-color: #333;
    box-shadow: inset 0px 2px 4px rgb(244 0 255 / 30%),
      inset 0px 4px 8px rgb(127 0 255 / 30%),
      inset 0px 8px 16px rgb(255 0 240 / 30%);
    transition: 0.2s;
    transform: translateY(2px);
  }
`;
