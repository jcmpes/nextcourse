import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { courseDetailAction } from '../../src/store/actions/course-detail';
import { getCourseDetail, getUi } from '../../src/store/selectors';
import CourseDetail from '../../src/components/courses/CourseDetailPage/CourseDetail';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { getCourse } from '../../src/api/courses';

function CoursePage() {
  const [course, setCourse] = useState(null)
  const { courseSlug } = useRouter().query;
  const { loading } = useSelector(getUi);
  const dispatch = useDispatch();
  // const course = useSelector((state) => getCourseDetail(state, courseSlug));
  useEffect () => {
    // dispatch(courseDetailAction(courseSlug));
    async function getCourseDetail() {
      const course = await getCourse(courseSlug);
      setCourse(course)
    }
  }, [courseSlug, course, dispatch]);

  return (
      <div className="course-detail-page">
        {loading && "I'm loading..."}
        {course && <CourseDetail {...course} />}
      </div>
  );
}

export default CoursePage;
