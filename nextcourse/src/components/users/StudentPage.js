// import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import userPortrait from '../../../public/img/user.png';
import Image from 'next/image';

const StudentPage = ({ username }) => {
  // const { t } = useTranslation(['global']);

  return (
    <>
      <div className="user-profile-section">
        <div className="user-profile-data">
          <div className="user-picture">
            <Image src={userPortrait} alt="user portrait" width={80} height={90} />
          </div>
          <div className="user-details">
            <h1>{username}</h1>
            <p>{('users.student')}</p>
          </div>
        </div>

        <div className="user-profile-nav">
          <ul>
            <li>
              <Link href="" className="my-profile-nav-item">
              <a>
                {('users.learning')}
              </a>
              </Link>
            </li>
            
            <li>
              <Link href="" className="my-profile-nav-item">
              <a>
                {('users.wishlist')}
              </a>
              </Link>
            </li>
            <li>
              <Link href="" className="my-profile-nav-item">
              <a>
                {('users.chats')}
              </a>
              </Link>
            </li>
            <li>
              <Link href="" className="my-profile-nav-item">
              <a>
                {('users.edit profile')}
              </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default StudentPage;
