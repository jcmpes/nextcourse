import { useDispatch, useSelector } from 'react-redux';
// import { useRouter } from 'next/router';
import { courseDetailAction } from '../../src/store/actions/course-detail';
import { getCourseDetail, getUi } from '../../src/store/selectors';
import CourseDetail from '../../src/components/courses/CourseDetailPage/CourseDetail';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { getCourse, getCourses } from '../../src/api/courses';

function CoursePage({ course }) {
  // const [course, setCourse] = useState(null)
  // const { courseSlug } = useRouter().query;
  const { loading } = useSelector(getUi);
  console.log('COURSE: ', course)
  // const dispatch = useDispatch();
  // const course = useSelector((state) => getCourseDetail(state, courseSlug));
  // useEffect(() => {
  //   // dispatch(courseDetailAction(courseSlug));
    
  // }, [courseSlug]);


  return (
      <div className="course-detail-page">
        {loading && "I'm loading..."}
        {course && <CourseDetail {...course} />}
      </div>
  );
}

export async function getServerSideProps(context) {
  // console.log('CONTEXT: ', context)
  const course = await getCourse(context.query.courseSlug);
      
  return {
    props: {
      course
    }
  }
}


export default CoursePage;
