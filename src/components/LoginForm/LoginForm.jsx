import { Container, LoginFormStyled } from 'components/common.styled';
import { Formik, Field, Form } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auhtSate.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts');
      return;
    }
    navigate('/login');
  }, [isLoggedIn, navigate]);

  return (
    <Container id="login">
      <Formik
        initialValues={{
          password: 'zzzzzzzz',
          email: 'grunwald@ggg.com',
        }}
        onSubmit={user => {
          dispatch(userLogIn(user));
        }}
      >
        <LoginFormStyled>
          <Form id="login">
            <label htmlFor="email">Почта</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />

            <label htmlFor="password">Пароль</label>
            <Field id="password" name="password" />
            <button id="login" type="submit">
              Войти
            </button>
          </Form>
        </LoginFormStyled>
      </Formik>
    </Container>
  );
};
