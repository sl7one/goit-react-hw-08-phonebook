import { Authorization } from 'components/Authorization/Authirization';
import { NavigationStyled } from 'components/common.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

export const Navigation = () => {
  const isLogged = useSelector(state => state.auhtSate.isLoggedIn);

  return (
    <>
      <NavigationStyled>
        {isLogged ? <UserMenu /> : <Authorization />}
      </NavigationStyled>
      <Outlet />
    </>
  );
};
