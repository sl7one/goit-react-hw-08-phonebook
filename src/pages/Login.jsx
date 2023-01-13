import { Container } from 'components/common.styled';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  // const dispatch = useDispatch();
  // dispatch(userGet());
  // const loggedIn = useSelector(state => state.auhtSate.isLoggedIn);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   // console.log('dispatch userGet');
  //   if (loggedIn) navigate('/contacts');
  // });

  return (
    <Container>
      <LoginForm />
    </Container>
  );
};
