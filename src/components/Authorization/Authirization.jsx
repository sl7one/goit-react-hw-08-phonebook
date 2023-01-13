import { LinkElement } from 'components/common.styled';

export const Authorization = () => {
  return (
    <nav>
      <LinkElement to="/register">Register</LinkElement>
      <LinkElement to="/login">Login</LinkElement>
    </nav>
  );
};
