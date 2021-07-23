import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '../../shared';
import { logout } from '../../../api/auth';
import { getAuth } from '../../../store/selectors';
import { authLogout } from '../../../store/actions/logout';
import { useDispatch, useSelector } from 'react-redux';
// import { useTranslation } from 'react-i18next';
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

  // const { t, i18n } = useTranslation(['global']);
  const switchLanguage = (ev) => {
  //   // TODO: improve this function getting available languages dinamically
  //   if (ev.target.innerHTML === 'es') {
  //     i18n.changeLanguage('es');
  //   } else if (ev.target.innerHTML === 'en') {
  //     i18n.changeLanguage('en');
  //   }
  };

  return (
    <header className="header">
      <Link href="/" passHref>
        <Button>{('header.home')}</Button>
      </Link>
      <Link href="/register" passHref>
          <Button>{('header.register')}</Button>
      </Link>

      {isLogged ? (
        <Button onClick={handleLogoutClick}>{('header.log out')}</Button>
      ) : (
        <Link href="/login" passHref>
            <Button>{('header.log in')}</Button>
        </Link>
      )}

      <Link href="" locale="en" passHref>
          <Button type="text" onClick={switchLanguage}>
            en
          </Button>
      </Link>
      <Link href="" locale="es" passHref>
          <Button type="text" onClick={switchLanguage}>
            es
          </Button>
      </Link>

      <br />
      <Link href="/create" passHref>
          <Button>{('header.create')}</Button>
      </Link>

      <Link href="/user" passHref>
          <Button>{('header.user')}</Button>
      </Link>
      <FiltersForm />
    </header>
  );
};

export default Header;
