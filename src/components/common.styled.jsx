import { Field, Form } from 'formik';
import { NavLink } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

// export const AddContactFormModal = styled.div`
//   /* opacity: 0.2; */

//   }
// `;
export const EditContactForm = styled.div`
  form {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 800px;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background: linear-gradient(
      135deg,
      rgba(178, 251, 195, 1) 0%,
      rgba(232, 141, 236, 1) 100%
    );
    padding: 20px;
    box-shadow: inset 3px 2px 19px -6px rgba(0, 0, 0, 1);

    /* background: ${({ id }) => {
      switch (id) {
        case 'edit':
          return ' linear-gradient(135deg, rgba(178,251,195,1) 0%, rgba(232,141,236,1) 100%);';

        case 'add':
          return 'linear-gradient(-135deg, rgba(178,251,195,1) 0%, rgba(232,141,236,1) 100%)';

        default:
          return 'Beige';
      }
    }}; */
  }
`;
export const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 20px;
  max-width: max-content;
  height: 100%;
  margin-left: auto;
  margin-top: 30px;
  margin-bottom: 20px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  background-color: ${({ id }) => {
    switch (id) {
      case 'login':
        return 'rgba(178, 251, 214, 1)';
      default:
        return 'green';
    }
  }};

  transition: transform 350ms ease-in-out;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;
export const ButtonLogOut = styled(Button)`
  background-color: transparent;
  border: 0;
  outline: none;
  height: auto;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 4px;
  outline: 2px solid gray;
`;
export const AddButton = styled.button`
  border: 2px solid black;
  border-radius: 10px;
  background-color: transparent;
  padding: 5px;
  transition: width 350ms ease-in-out;
  color: black;
  font-size: 20px;
  width: 150px;
  margin-right: 20px;
  &: hover {
    width: 300px;
  }
`;
export const ItemButton = styled.button`
  border: 1px solid gray;
  background-color: transparent;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-left: 5px;
`;
export const Email = styled.p`
  font-size: 20px;
  padding: 10px;
  outline: 2px solid gray;
  margin: 0;
  border-radius: 10px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Input = styled.input`
  width: 100%;
  padding: 15px 0px;
  padding-left: 15px;
  border-radius: 10px;
  font-size: 20px;
  outline: none;
  border: 0px;
  outline: 1px solid gray;

  transition: box-shadow 350ms ease-in-out;
  &:focus {
    box-shadow: inset 4px 4px 19px -10px rgba(0, 0, 0, 1);
  }
`;
export const FieldStyled = styled(Field)`
  width: 100%;
  padding: 15px 0px;
  padding-left: 15px;
  border-radius: 10px;
  font-size: 20px;
  outline: none;
  border: 0px;
  outline: 1px solid gray;

  transition: box-shadow 350ms ease-in-out;
  &:focus {
    box-shadow: inset 4px 4px 19px -10px rgba(0, 0, 0, 1);
  }
`;
export const FormStyled = styled(Form)`
  background-color: green;
  border-radius: 10px;
  padding: 30px;
  gap: 10px;
`;
export const FormEditStyled = styled.form`
  background-color: red;
  display: flex;
  gap: 10px;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
`;
export const Label = styled.label`
  display: flex;
  align-items: flex-start;
  font-size: 25px;
`;
export const ContactsWrapper = styled.div`
  padding: 0px 30px;
  margin-top: 30px;
  height: 100vh;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  /* padding: 0px: 30px; */
  /* padding-top: 30px; */
`;
// export const Background = styled.div`
//   /* width: 100vw; */
//   height: 100vh;
//   /* background: ${({ id }) => {
//     switch (id) {
//       case 'register':
//         return 'linear-gradient(-135deg, rgba(178, 251, 214, 1) 0%, rgba(141, 146, 236, 1) 100%);';
//       case 'login':
//         return 'linear-gradient( -135deg, rgba(251,229,178,1) 0%, rgba(236,141,141,1) 100% );';
//       case 'contactList':
//         return 'linear-gradient( 135deg, rgba(178,251,195,1) 0%, rgba(232,141,236,1) 100% );';
//       default:
//         return 'red';
//     }
//   }}; */
// `;
export const List = styled.ol`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin-top: 0px;
  background-color: Beige;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 5px;
`;
export const Phone = styled.span`
  margin-left: 30px;
`;
export const Name = styled.span`
  color: green;
`;
export const Item = styled.li`
  padding: 10px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  ${props =>
    props.gender === 'male'
      ? css`
          background-color: AliceBlue;
        `
      : css`
          background-color: Beige;
        `}
`;
const form = keyframes`
0%{left: 0%;
opacity:0;}
100%{right: 100%;
opacity:1}`;
export const LoginFormStyled = styled.div`
  form {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 800px;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background: linear-gradient(
      135deg,
      rgba(251, 229, 178, 1) 0%,
      rgba(236, 141, 141, 1) 100%
    );
    padding: 20px;
    box-shadow: inset 3px 2px 19px -6px rgba(0, 0, 0, 1);
    animation-name: ${form};
    animation-duration: 350ms;
  }
  label {
    display: flex;
    align-items: flex-start;
    margin-left: 30px;
    margin-top: 30px;
    font-size: 25px;
  }
  input {
    padding: 15px 0px;
    padding-left: 15px;
    border-radius: 10px;
    width: 95%;
    font-size: 20px;
    outline: none;
    border: 0px;
    margin-left: 20px;
    margin-top: 15px;
    outline: 1px solid gray;
    transition: box-shadow 350ms ease-in-out;
    &:focus {
      box-shadow: inset 4px 4px 19px -10px rgba(0, 0, 0, 1);
    }
  }
  button {
    border: none;
    border-radius: 10px;
    padding: 10px;
    font-size: 20px;
    max-width: max-content;
    height: 100%;
    margin-left: auto;
    margin-top: 30px;
    margin-bottom: 20px;
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
    background-color: white;
    transition: all 350ms ease-in-out;
    &:hover {
      transform: scale(1.05);
      background-color: rgba(251, 229, 178, 1);
      cursor: pointer;
    }
  }
`;
export const RegisterFormStyled = styled.div`
  form {
    padding: 20px;
    box-shadow: inset 3px 2px 19px -6px rgba(0, 0, 0, 1);
    position: absolute;
    left: 50%;
    top: 50%;
    width: 800px;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background: linear-gradient(
      135deg,
      rgba(178, 251, 214, 1) 0%,
      rgba(141, 146, 236, 1) 100%
    );

    animation-name: ${form};
    animation-duration: 350ms;
  }
  label {
    display: flex;
    align-items: flex-start;
    margin-left: 30px;
    margin-top: 30px;
    font-size: 25px;
  }
  input {
    padding: 15px 0px;
    padding-left: 15px;
    border-radius: 10px;
    width: 95%;
    font-size: 20px;
    border: 0px;
    margin-left: 20px;
    margin-top: 15px;
    outline: 1px solid gray;

    transition: box-shadow 350ms ease-in-out;
    &:focus {
      box-shadow: inset 4px 4px 19px -10px rgba(0, 0, 0, 1);
    }
  }
  button {
    border: none;
    border-radius: 10px;
    padding: 10px;
    font-size: 20px;
    max-width: max-content;
    height: 100%;
    margin-left: auto;
    margin-top: 30px;
    margin-bottom: 20px;
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
    background-color: white;
    transition: all 350ms ease-in-out;
    &:hover {
      transform: scale(1.05);
      cursor: pointer;
      background-color: rgba(178, 251, 214, 1);
    }
  }
`;
export const NavigationStyled = styled.div`
  background: linear-gradient(
    -135deg,
    rgba(178, 251, 195, 1) 0%,
    rgba(232, 141, 236, 1) 100%
  );
  padding: 10px 30px;

  box-shadow: 0px 2px 20px -4px rgba(0, 0, 0, 0.75);
  nav {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
  }
  a {
    font-size: 25px;
    text-decoration: none;
  }
`;
const line = keyframes`
0%{width: 0%;}
100%{width: 100%;}`;
export const LinkElement = styled(NavLink)`
  color: black;
  padding: 15px 0px;
  &.active {
    color: green;
    font-weight: 700;
    position: relative;
    transition: width 350ms ease-in-out;
    &::before {
      content: '';
      background-color: green;
      display: block;
      height: 2px;
      width: 100%;
      border-radius: 20px;
      position: absolute;
      bottom: -4px;
      left: 0;
      animation-name: ${line};
      animation-duration: 250ms;
    }
  }
`;
export const UserMenuStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Logo = styled.h1`
  display: flex;
  align-items: center;
  font-size: 40px;
  margin: 0px;
`;
export const LogOut = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 900px;
  padding: 0px 30px;
  background: ${({ id }) => {
    switch (id) {
      case 'register':
        return 'linear-gradient(-135deg, rgba(178, 251, 214, 1) 0%, rgba(141, 146, 236, 1) 100%);';
      case 'login':
        return 'linear-gradient( -135deg, rgba(251,229,178,1) 0%, rgba(236,141,141,1) 100% );';
      case 'contactList':
        return 'linear-gradient( 135deg, rgba(178,251,195,1) 0%, rgba(232,141,236,1) 100% );';
      // case 'navigation':
      //   return 'linear-gradient(-135deg,rgba(178, 251, 195, 1) 0%,rgba(232, 141, 236, 1) 100%);';
      default:
        return 'red';
    }
  }};
`;
export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
