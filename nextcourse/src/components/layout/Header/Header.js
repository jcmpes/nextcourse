import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '../../shared';
import { logout } from '../../../api/auth';
import { getAuth, getIsLogged } from '../../../store/selectors';
import { authLogout } from '../../../store/actions/logout';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import FiltersForm from '../../FiltersForm/FiltersForm';

const Header = () => {
  const { isLogged } = useSelector(getAuth)
  const dispatch = useDispatch();
  const history = useRouter();

  const handleLogoutClick = () => {
    logout(); // clear local storage
    dispatch(authLogout()); // change isLogged state
    history.push('/');
  };

  const { t, i18n } = useTranslation(['global']);
  const switchLanguage = (ev) => {
    // TODO: improve this function getting available languages dinamically
    if (ev.target.innerHTML === 'es') {
      i18n.changeLanguage('es');
    } else if (ev.target.innerHTML === 'en') {
      i18n.changeLanguage('en');
    }
  };

  return (
    <header className="header">
      <Link href="/">
        <Button>{t('header.home')}</Button>
      </Link>
      <Link href="/register">
        <Button>{t('header.register')}</Button>
      </Link>

      {isLogged ? (
        <Button onClick={handleLogoutClick}>{t('header.log out')}</Button>
      ) : (
        <Link href="/login">
          <Button>{t('header.log in')}</Button>
        </Link>
      )}

      <Button type="text" onClick={switchLanguage}>
        en
      </Button>
      <Button type="text" onClick={switchLanguage}>
        es
      </Button>

      <br />
      <Link href="/create">
        <Button>{t('header.create')}</Button>
      </Link>

      <Link href="/user">
        <Button>{t('header.user')}</Button>
      </Link>
      <FiltersForm />
    </header>
  );
};

export default Header;