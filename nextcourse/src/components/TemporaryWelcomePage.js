import { authLogout } from '../store/actions/logout';
import { loadCoursesAction } from '../store/actions/load-courses';
import { getAuth, getUI } from '../store/selectors';
// import { useTranslation } from 'react-i18next';
import { getCourses } from '../api/courses';
import Course from '../components/courses/Course';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesLoadRequest } from '../store/actions/categories-load';
import { Button } from '../components/shared';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


function TemporaryWelcomePage() {
  const auth = useSelector(getAuth)
  // const { t, i18n } = useTranslation(['global']);

  const { loading, error } = useSelector(getUI);
  const dispatch = useDispatch();

  const switchLanguage = (ev) => {
  //   if (ev.target.innerHTML === 'Español') {
  //     i18n.changeLanguage('es');
  //   } else if (ev.target.innerHTML === 'English') {
  //     i18n.changeLanguage('en');
  //   }
  };

  const { username, favs } = auth;

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    // getCourses().then(setCourses);
    dispatch(loadCoursesAction(getCourses, setCourses));
    dispatch(categoriesLoadRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const coursesElement =
    courses && favs
      ? courses.map((course) => {
          const faved = favs.includes(course._id);
          return (
            <div key={course._id}>
              <Course
                course={course}
                me={username}
                key={course._id}
                faved={faved}
              />
            </div>
          );
        })
      : [];

  return error || loading 
    ? ('Loading...')
    : (
      <>
        <div
          style={{
            textAlign: 'center',
            fontSize: 40,
          }}
        >
          {('welcome to')}
          {('title')}
          {username ? `, ${username}` : ''}
        </div>

        <div>{('headline')}</div>

        <p>
          {/* Current language: <strong>{i18n.language}</strong> */}
        </p>
        <Button onClick={switchLanguage}>{'English'}</Button>
        <Button onClick={switchLanguage}>{'Español'}</Button>

        {coursesElement.length === 0 && !loading
          ? "There's no courses yet"
          : coursesElement}
      </>
  );
}

export default TemporaryWelcomePage;
