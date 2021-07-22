import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '../../shared';
import { logout } from '../../../api/auth';
import { getAuth } from '../../../store/selectors';
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
        <a>
          <Button>{t('header.home')}</Button>
        </a>
      </Link>
      <Link href="/register">
        <a>
          <Button>{t('header.register')}</Button>
        </a>
      </Link>

      {isLogged ? (
        <Button onClick={handleLogoutClick}>{t('header.log out')}</Button>
      ) : (
        <Link href="/login">
          <a>
            <Button>{t('header.log in')}</Button>
          </a>
        </Link>
      )}

      <Link href="" locale="en">
        <a>
          <Button type="text" onClick={switchLanguage}>
            en
          </Button>
        </a>
      </Link>
      <Link href="" locale="es">
        <a>
          <Button type="text" onClick={switchLanguage}>
            es
          </Button>
        </a>
      </Link>

      <br />
      <Link href="/create">
        <a>
          <Button>{t('header.create')}</Button>
        </a>
      </Link>

      <Link href="/user">
        <a>
          <Button>{t('header.user')}</Button>
        </a>
      </Link>
      <FiltersForm />
    </header>
  );
};

export default Header;
