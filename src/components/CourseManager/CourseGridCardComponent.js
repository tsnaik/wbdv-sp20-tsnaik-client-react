import React from "react";
import thumbnail from "./static/grid_thumbnail.svg";

class CourseGridCardComponent extends React.Component {
    saveCourse = async () => {
        await this.props.updateCourse(this.state.course._id, this.state.course);
        this.setState({editing: false});
    };

    state = {
        editing: false,
        course: this.props.course
    };

    render() {
        return (
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-1">
                <figure className="figure">
                    <a href="#" className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail" src={thumbnail}
                             width="150"/>
                    </a>
                    <figcaption className="figure-caption">
                        <input value={this.state.course.title}
                               onKeyPress={(event) => {
                                   if (event.key === 'Enter') {
                                       this.saveCourse();
                                   }
                               }}
                               onChange={(e) =>
                                   this.setState(
                                       {
                                           course: {
                                               ...this.state.course,
                                               title: e.target.value,
                                               last_modified: new Date(Date.now()).toLocaleString()
                                           }
                                       })}
                               onClick={this.props.showCourseEditor}
                               type='text' className={this.state.editing ? 'form-control'
                                                                         : 'form-control-plaintext wbdv-clickable'}
                               readOnly={!this.state.editing}/>
                        <span>
                            {!this.state.editing &&
                             <button className="btn pl-0"
                                     onClick={() => this.props.deleteCourse(this.props.course)}>
                                 <i className="fas fa-trash text-danger"/>
                             </button>}
                            {!this.state.editing &&
                             <button className="btn pl-0"
                                     onClick={() => this.setState({editing: true})}>
                                 <i className="fas fa-edit text-primary"/></button>
                            }
                            {this.state.editing &&
                             <button className="btn pl-0"
                                     onClick={this.saveCourse}>
                                 <i className="fas fa-check text-primary"/>
                             </button>}
                            </span>
                    </figcaption>
                </figure>
            </div>
        );
    }
}

export default CourseGridCardComponent;