import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { closeModal } from 'redux/contacts/modalSlice';
import { addContact } from 'redux/contacts/operations';
import {
  Backdrop,
  Button,
  FieldStyled,
  FormStyled,
  Label,
} from 'components/common.styled';

export const AddContactForm = () => {
  const dispath = useDispatch();
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Введите более 3х символов')
      .max(20, 'Слишком маленькое имя')
      .required('Заполните поле имени'),
    number: Yup.string()
      .min(5, 'Минимальная длинна символов 10 цифр')
      .max(15, 'Максимальная длинна символов 12 цифр')
      .required('Заполните поле телефона'),
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          dispath(addContact(values));
          dispath(closeModal());
        }}
      >
        {() => (
          <Backdrop>
            <FormStyled id="add">
              <Label htmlFor="name">
                Name <FieldStyled id="name" name="name" />
                <ErrorMessage name="name" />
              </Label>
              <Label htmlFor="number">
                Number{' '}
                <FieldStyled
                  id="number"
                  name="number"
                  placeholder="0XX1234567"
                />
                <ErrorMessage name="number" />
              </Label>
              <div>
                <Button type="submit">Add</Button>
                <Button type="button" onClick={() => dispath(closeModal())}>
                  Close
                </Button>
              </div>
            </FormStyled>
          </Backdrop>
        )}
      </Formik>
    </div>
  );
};

// if (!values) return;
// axios
//   .put(
//     `https://63b72b2d4d97e82aa3b6324d.mockapi.io/api/v1/contacts/${idContact}`,
//     values
//   )
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// setModal(false);