import { useDispatch } from 'react-redux';
import { registerAction } from '../src/store/actions/register';
import RegisterForm from '../src/components/auth/RegisterPage/RegisterForm';

// import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

const RegisterPage = () => {
  const history = useRouter();
  const location = useRouter();
  const dispatch = useDispatch();

  // const { t } = useTranslation(['global']);

  const handleSubmit = (credentials) => {
    dispatch(registerAction(credentials, history, location));
  };

  return (
    <>
      <h1>{'register'}</h1>
      <RegisterForm onSubmit={handleSubmit} />
    </>
  );
};

export default RegisterPage;