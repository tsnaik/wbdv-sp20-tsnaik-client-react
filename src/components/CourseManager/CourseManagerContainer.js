import React from "react";
import CourseManagerNavbarComponent from "./CourseManagerNavbarComponent";
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
// import CourseEditor from "./CourseEditor/CourseEditor";
import {createCourse, deleteCourse, findAllCourses} from "../../services/CourseService"

class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        editingCourse: false,
        newCourseTitle: '',
        courses: []
    };

    componentDidMount = async () => {

        const allCourses = await findAllCourses();
        this.setState({
                          courses: allCourses
                      })

        // findAllCourses()
        //     .then(courses => this.setState({
        //         courses: courses
        //     }))
    };

    deleteCourse = async (deletedCourse) => {
        const status = await deleteCourse(deletedCourse._id);
        const courses = await findAllCourses();
        this.setState({
                          courses: courses
                      })
        // this.setState(prevState => ({
        //     courses: prevState.courses.filter(course => course._id !== deletedCourse._id)
        // }))
    };

    toggle = () => {
        this.setState((prevState) => {
            if (prevState.layout === 'grid') {
                return {
                    layout: 'table'
                }
            } else {
                return {
                    layout: 'grid'
                }
            }
        })
    };

    showCourseEditor = () =>
        this.setState({
                          editingCourse: true
                      });

    hideCourseEditor = () =>
        this.setState({
                          editingCourse: false
                      });

    addCourse = async (newCourseName) => {
        console.log(newCourseName);
        const newCourse = {
            title: newCourseName
        }
        const actualCourse = await createCourse(newCourse);
        const allCourses = await findAllCourses();
        this.setState({
                          courses: allCourses
                      })
        // this.setState(prevState => ({
        //     courses: [
        //         ...prevState.courses,
        //         {
        //             _id: (new Date()).getTime() + "",
        //             title: prevState.newCourseTitle
        //         }
        //     ]
        // }))
    };

    updateForm = (e) =>
        this.setState({
                          newCourseTitle: e.target.value
                      });

    render() {
        return (
            <div>
                <div>
                    <CourseManagerNavbarComponent add={this.addCourse}/>
                    <nav className="navbar navbar-light bg-light">
                        <div className="container-fluid">
                            <div className="row justify-content-end w-100">
                                {this.state.layout === 'table' &&
                                 <div className="col-1 mx-1">
                                     <button type="button" onClick={this.toggle} className="btn">
                                         <i className="fas fa-th fa-lg float-right wbdv-button wbdv-grid-layout"/>
                                     </button>
                                 </div>}
                                {this.state.layout === 'grid' &&
                                 <div className="col-1 mx-1">
                                     <button type="button" onClick={this.toggle} className="btn">
                                         <i className="fas fa-lg fa-list-ul float-right wbdv-button wbdv-list-layout"/>
                                     </button>
                                 </div>}
                                <div className="col-1 mx-1">
                                    <button type="button" className="btn wbdv-header wbdv-sort">
                                        <i className="fas fa-lg fa-sort-numeric-down float-right"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </nav>

                    {this.state.layout === 'table' &&
                     <CourseTableComponent courses={this.state.courses}/>}
                    {this.state.layout === 'grid' &&
                     <CourseGridComponent courses={this.state.courses}/>}
                    {/*<button onClick={this.toggle}>Toggle</button>*/}
                    {/*<input*/}
                    {/*    onChange={this.updateForm}*/}
                    {/*    value={this.state.newCourseTitle}/>*/}
                    {/*<button onClick={this.addCourse}>Add Course</button>*/}

                </div>

            </div>
        )
    }
}

export default CourseManagerContainer