import React from "react";
import CourseTableRowComponent from "./CourseTableRowComponent";

const CourseTableComponent = ({courses, deleteCourse, updateCourse}) =>
    <div className="container-fluid ">
        <div className="row justify-content-center">
            <div className="col">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col" className="wbdv-header wbdv-title">Title</th>
                            <th className="d-none d-md-table-cell wbdv-header wbdv-owner"
                                scope="col">Owned
                                By
                            </th>
                            <th className="d-none d-md-table-cell wbdv-header wbdv-last-modified"
                                scope="col">Last Modified
                            </th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            courses.map(function(course) {
                                return <CourseTableRowComponent
                                    updateCourse={updateCourse}
                                    // showCourseEditor={showCourseEditor}
                                    deleteCourse={deleteCourse}
                                    key={course._id}
                                    course={course}/>
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
export default CourseTableComponent
