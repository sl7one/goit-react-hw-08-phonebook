import { RegistartionForm } from 'components/RegistrationForm/RegistrationForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  // const isLogged = useSelector(state => state.auhtSate.isLoggedIn);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isLogged) navigate('/login');
  // }, [isLogged, navigate]);

  return <RegistartionForm />;
};
