import React from "react";
import CourseGridCardComponent from "./CourseGridCardComponent";

const CourseGridComponent = ({courses, deleteCourse, updateCourse, formatDate, history}) =>
    <div className="container">
        <div className="row text-center">
            {
                courses.map(function (course) {
                    return <CourseGridCardComponent
                        history = {history}
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
