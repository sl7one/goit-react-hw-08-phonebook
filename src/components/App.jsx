import { Contacts } from 'pages/Contacts';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userGet } from 'redux/auth/operations';

export const App = () => {
  const isLogged = useSelector(state => state.auhtSate.isLoggedIn);
  const token = useSelector(state => state.auhtSate.token);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) dispatch(userGet());
  }, [dispatch]);

  //isLogged= true; path-name=/login

  return !isLogged ? (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* {Public} */}
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* {Privat} */}
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<Navigate to="/contacts" />} />
      </Route>
    </Routes>
  );
};
