import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';

function VerifyPage() {
  const { verifyToken } = useRouter().query;
  const [verified, setVerified] = useState(false);

  // const { t } = useTranslation(['global']);

  useEffect(() => {
    // GET request to backend to verify the user
    fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/verify?vt=${verifyToken}`,
    )
      .then((response) => {
        if (response.status === 200) {
          setVerified(true);
        }
      })
      .catch((err) => console.log(err));
  }, [verifyToken]);
  return (
      <div className="verify-page">
        {verified ? (
          <>
            <p>
              {('activation succeded') + ' '}
              <Link href="/login">
                <a>{('log in your account')}</a>
              </Link>
            </p>
          </>
        ) : (
          <p>{('activation failed')}</p>
        )}
      </div>
  );
}

export default VerifyPage;