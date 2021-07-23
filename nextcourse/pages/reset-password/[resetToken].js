import { useDispatch } from 'react-redux';
import { resetPasswordAction } from '../../src/store/actions/reset-password';
import ResetPasswordForm from '../../src/components/auth/ResetPasswordPage/ResetPasswordForm';
import { useRouter } from 'next/router';

const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const history = useRouter();
  const location = useRouter();

  
  const { resetToken } = useRouter().query;

  const handleSubmit = (newPassword) => {
    dispatch(resetPasswordAction(resetToken, newPassword, history, location));
    // TODO UX:
    // React-toastify -> 'Password updated'
  };

  return (
    <>
      <h1>{('reset password.reset password')}</h1>
      <p>{('reset password.please enter your new password')}</p>
      <ResetPasswordForm onSubmit={handleSubmit} />
    </>
  );
};

export default ResetPasswordPage;
