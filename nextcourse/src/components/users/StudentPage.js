import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import userPortrait from '../../assets/img/user.png';
import Image from 'next/image';

const StudentPage = ({ username }) => {
  const { t } = useTranslation(['global']);

  return (
    <>
      <div className="user-profile-section">
        <div className="user-profile-data">
          <div className="user-picture">
            <Image src={userPortrait} alt="user portrait" width="80" />
          </div>
          <div className="user-details">
            <h1>{username}</h1>
            <p>{t('users.student')}</p>
          </div>
        </div>

        <div className="user-profile-nav">
          <ul>
            <Link href="/" className="my-profile-nav-item">
              <a>
                {t('users.learning')}
              </a>
            </Link>
            <Link href="/" className="my-profile-nav-item">
              <a>
                {t('users.wishlist')}
              </a>
            </Link>
            <Link href="/" className="my-profile-nav-item">
              <a>
                {t('users.chats')}
              </a>
            </Link>
            <Link href="/" className="my-profile-nav-item">
              <a>
                {t('users.edit profile')}
              </a>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default StudentPage;
