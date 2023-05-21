// .wrapper {
//   display: flex;
//   align-items: center;
//   gap: 12px;
// }

// .username {
//   font-weight: 700;
// }

import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LogOutBtn = styled.button`
  height: 32px;
  margin: 0;
  // line-height: 43px;
  padding: 0px 20px;

  // font-size: 1rem;
  // font-weight: 500;
  color: #fff;
  background-color: #000000;
  border-radius: 5px;
  border: 0px;

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
