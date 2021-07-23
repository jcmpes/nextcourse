import { authLogout } from '../store/actions/logout';
import { loadCoursesAction } from '../store/actions/load-courses';
import { getAuth, getUI } from '../store/selectors';
import { getCourses } from '../api/courses';
import Course from '../components/courses/Course';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesLoadRequest } from '../store/actions/categories-load';
import { Button } from '../components/shared';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';


function TemporaryWelcomePage() {
  const auth = useSelector(getAuth);
  const { locale } = useRouter();
  const { username, favs } = auth;
  const { loading, error } = useSelector(getUI);
  const [courses, setCourses] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCoursesAction(getCourses, setCourses));
    dispatch(categoriesLoadRequest());
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
          Current language: <strong>{locale}</strong>
        </p>
        <Link href="/" locale="en" passHref>
          <Button>{'English'}</Button>
        </Link>
        <Link href="/" locale="es" passHref>
          <Button>{'Español'}</Button>
        </Link>

        {coursesElement.length === 0 && !loading
          ? "There's no courses yet"
          : coursesElement}
      </>
  );
}

export default TemporaryWelcomePage;
