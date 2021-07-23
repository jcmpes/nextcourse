import React from 'react';
// import { useTranslation } from 'react-i18next';
import { Button, FormField } from '../../shared';

const ForgotForm = ({ onSubmit }) => {
  const [email, setEmail] = React.useState('');
  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(email);
  };
  const handleChange = (ev) => {
    setEmail(ev.target.value);
  };

  // const { t } = useTranslation(['global']);

  return (
    <div className="forgotForm">
      <h1>{('forgot password.forgot password')}</h1>
      <p>{('forgot password.please enter your email')}</p>
      <form className="forgotPasswordForm" onSubmit={handleSubmit}>
        <FormField
          type="email"
          label={('email')}
          name="email"
          value={email}
          onChange={handleChange}
        />
        <Button type="submit" disabled={!email}>
          {('next')}
        </Button>
      </form>
    </div>
  );
};

export default ForgotForm;
