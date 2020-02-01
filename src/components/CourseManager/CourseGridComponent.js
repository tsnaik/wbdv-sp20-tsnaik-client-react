import React from "react";
import CourseGridCardComponent from "./CourseGridCardComponent";

const CourseGridComponent = ({courses, deleteCourse, updateCourse, formatDate}) =>
    <div className="container">
        <div className="row text-center">
            {
                courses.map(function (course) {
                    return <CourseGridCardComponent
                        // showCourseEditor={showCourseEditor}
                        deleteCourse={deleteCourse}
                        updateCourse = {updateCourse}
                        key={course._id}
                        course={course}
                        formatDate={formatDate}/>
                })
            }
        </div>
    </div>;

export default CourseGridComponent
