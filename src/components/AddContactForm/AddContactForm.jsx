import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { closeModal } from 'redux/contacts/modalSlice';
import { addContact } from 'redux/contacts/operations';
import {
  AddContactStyled,
  AddFormButtons,
  Backdrop,
  EditButtons,
  FieldStyled,
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
        }}
      >
        {() => (
          <Backdrop>
            <AddContactStyled id="add">
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
              <AddFormButtons>
                <EditButtons type="submit">Add</EditButtons>
                <EditButtons
                  type="button"
                  onClick={() => dispath(closeModal())}
                >
                  Close
                </EditButtons>
              </AddFormButtons>
            </AddContactStyled>
          </Backdrop>
        )}
      </Formik>
    </div>
  );
};
