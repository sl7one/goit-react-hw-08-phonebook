import {
  ButtonLogOut,
  Email,
  Logo,
  LogOut,
  UserMenuStyled,
} from 'components/common.styled';
import { FcTouchscreenSmartphone } from 'react-icons/fc';
import { IoAirplaneOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { userLogOut } from 'redux/auth/operations';

const { useSelector, useDispatch } = require('react-redux');

export const UserMenu = () => {
  const email = useSelector(state => state.auhtSate.user.email);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(userLogOut());
  };
  return (
    <UserMenuStyled>
      <Logo>
        <FcTouchscreenSmartphone size="50px" /> Phonebook
      </Logo>
      <LogOut>
        <Email>{email}</Email>

        <ButtonLogOut type="button" onClick={handleClick}>
          <IoAirplaneOutline size="30px" />
        </ButtonLogOut>
      </LogOut>
    </UserMenuStyled>
  );
};
