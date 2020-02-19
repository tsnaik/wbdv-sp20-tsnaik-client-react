import React from "react";
import {connect} from "react-redux";
import widgetService from "../../services/WidgetService";
import {createWidget} from "../../actions/WidgetActions";
import WidgetListItemComponent from "./widgets/WidgetListItemComponent";

class WidgetListComponent extends React.Component {
    state = {
        preview: false
    };

    togglePreview = () => {
        console.log('switching:', this.state.preview);
        this.setState((prevState) => {
            if (prevState.preview === true) {
                return {
                    preview: false
                }
            } else {
                return {
                    preview: true
                }
            }
        })
    };
    render() {
        return ((this.props.currentModuleId && this.props.currentLessonId
                && this.props.currentTopicId) &&
                <div>
                    <div>
                        <div className="row mt-2">
                            <div className="col justify-content-end d-flex">
                                <div className="form-inline">
                                    <div className="custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input"
                                               id="customSwitch1" onChange={this.togglePreview}/>
                                        <label className="custom-control-label"
                                               htmlFor="customSwitch1">Preview</label>
                                    </div>
                                    <span className="ml-2">
                            <button className="btn btn-success" type="button">Save</button>
                        </span>
                                </div>
                            </div>
                        </div>
                        {
                            this.props.widgets.map(
                            widget =>
                                <WidgetListItemComponent
                                    key={widget._id}
                                    widget={widget}/>
                        )}
                        <div className="row">
                            <div className="col">
                                <div className="float-right">
                                    <button className="btn btn-primary m-1"
                                            onClick={() => this.props.createWidget(
                                                this.props.currentTopicId)}>
                                        <i className="fas fa-plus-circle"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return {
        widgets: state.widgets.widgets,
        currentLessonId: state.lessons.currentLessonId,
        currentModuleId: state.modules.currentModuleId,
        currentTopicId: state.topics.currentTopicId
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        createWidget: (id) => {
            widgetService.createWidget(id, {type: 'heading'})
                .then(actual =>
                          dispatch(createWidget(actual)))
        },
    }
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(WidgetListComponent)