import { RegisterFormStyled } from 'components/common.styled';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { userRegistration } from 'redux/auth/operations';

export const RegistartionForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        password: '',
        email: '',
      }}
      onSubmit={user => {
        dispatch(userRegistration(user));
      }}
    >
      <RegisterFormStyled>
        <Form>
          <label htmlFor="name">Имя</label>
          <Field id="name" name="name" placeholder="Jane" />
          <label htmlFor="email">Почта</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <label htmlFor="password">Пароль</label>
          <Field id="password" name="password" minLength="7" required />

          <button type="submit">Зарегистрироваться</button>
        </Form>
      </RegisterFormStyled>
    </Formik>
  );
};
