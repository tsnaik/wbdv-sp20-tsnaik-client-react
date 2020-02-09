import React from "react";

class CourseTableRowComponent extends React.Component {
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
            <tr className={`wbdv-row wbdv-course ${this.state.editing ? 'wbdv-highlight' : ''}`}>
                <td className="align-middle wbdv-row wbdv-icon"><i
                    className="fas fa-book"/></td>
                <td className="align-middle wbdv-row wbdv-title">
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
                                           last_modified: this.props.formatDate(
                                               new Date(Date.now()))
                                       }
                                   })}

                           onClick={ ()=>{
                               if(this.state.editing === false) {
                                   this.props.history.push(`/course/${this.state.course._id}`);
                               }
                           }}
                           type='text' className={this.state.editing ? 'form-control'
                                                                     : 'form-control-plaintext wbdv-clickable'}
                           readOnly={!this.state.editing}/>
                </td>

                <td className="align-middle d-none d-md-table-cell wbdv-row wbdv-owner">
                    {this.state.course.owned_by}
                </td>
                <td className="align-middle d-none d-md-table-cell wbdv-row wbdv-modified-date">
                    {this.state.course.last_modified}
                </td>
                <td className="align-middle wbdv-row wbdv-button wbdv-delete">
                    {!this.state.editing &&
                     <button className="btn"
                             onClick={() => this.props.deleteCourse(this.props.course)}>
                         <i className="fas fa-trash text-danger"/>
                     </button>}
                </td>

                {!this.state.editing &&
                 <td className="align-middle wbdv-row wbdv-button wbdv-edit">
                     <button className="btn"
                             onClick={() => this.setState({editing: true})}>
                         <i className="fas fa-edit text-primary"/></button>
                 </td>
                }

                {this.state.editing &&
                 <td className="align-middle wbdv-row wbdv-button">
                     <button className="btn"
                             onClick={this.saveCourse}>
                         <i className="fas fa-check text-primary"/>
                     </button>
                 </td>
                }
            </tr>
        )
    }
}

export default CourseTableRowComponent
