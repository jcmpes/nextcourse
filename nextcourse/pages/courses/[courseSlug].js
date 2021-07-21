import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { courseDetailAction } from '../../src/store/actions/course-detail';
import { getCourseDetail, getUi } from '../../src/store/selectors';
import CourseDetail from '../../src/components/courses/CourseDetailPage/CourseDetail';
import { useEffect } from 'react';

function CoursePage() {
  const { courseSlug } = useRouter().query;
  const { loading } = useSelector(getUi);
  const course = useSelector((state) => getCourseDetail(state, courseSlug));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(courseDetailAction(courseSlug));
  }, [courseSlug, course, dispatch]);

  return (
      <div className="course-detail-page">
        {loading && "I'm loading..."}
        {course && <CourseDetail {...course} />}
      </div>
  );
}

export default CoursePage;
