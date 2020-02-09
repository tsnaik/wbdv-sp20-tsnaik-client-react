import React from "react";
import {connect} from "react-redux";

class WidgetListComponent extends React.Component {
    render() {
        return ((this.props.currentModuleId && this.props.currentLessonId
                && this.props.currentTopicId) && <div>
                <div className="mt-1 border rounded">
                    <div className="row mx-1 my-2">
                        <div className="col">
                            <h5 className="wbdv-widget-header mt-2 align-center">Heading Widget</h5>
                            <span className="float-md-right form-inline">
                        <button className="btn btn-info m-1"><i
                            className="fas fa-arrow-down"/></button>
                        <button className="btn btn-info m-1"><i
                            className="fas fa-arrow-up"/></button>
                        <select className="custom-select m-1">
                            <option value="heading">Heading</option>
                        </select>
                        <button className="btn btn-danger m-1"><i
                            className="fas fa-times"/></button>
                    </span>
                        </div>
                    </div>
                    <div className="row mx-1 my-2">
                        <div className="col">
                            <div className="form-group">
                                <input type="text" className="form-control"
                                       placeholder="Heading text"
                                       value="Heading text"/>
                            </div>
                            <div className="form-group">
                                <select className="custom-select">
                                    <option value="heading1">Heading 1</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control"
                                       placeholder="Widget Name"/>
                            </div>
                        </div>
                    </div>
                    <div className="row mx-1 my-2">
                        <div className="col">
                            <h5>Preview</h5>
                            <h1>Heading text</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return {
        topics: state.topics.topics,
        currentLessonId: state.lessons.currentLessonId,
        currentModuleId: state.modules.currentModuleId,
        currentTopicId: state.topics.currentTopicId

    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        //TODO implement
    }
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(WidgetListComponent)