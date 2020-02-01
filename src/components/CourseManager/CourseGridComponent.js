import React from "react";
import CourseGridCardComponent from "./CourseGridCardComponent";

const CourseGridComponent = ({courses, deleteCourse, updateCourse}) =>
    <div className="container ">
        <div className="row">
            {
                courses.map(function (course) {
                    return <CourseGridCardComponent
                        // showCourseEditor={showCourseEditor}
                        deleteCourse={deleteCourse}
                        updateCourse = {updateCourse}
                        key={course._id}
                        course={course}/>
                })
            }
        </div>
    </div>;

export default CourseGridComponent
