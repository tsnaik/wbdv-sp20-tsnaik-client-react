import React from "react";
import widgetService from "../../../services/WidgetService";
import {deleteWidget, updateWidget} from "../../../actions/WidgetActions";
import {connect} from "react-redux";

class ParagraphWidgetComponent extends React.Component {

    render() {
        return (
            <div className="mt-1 border rounded">
                <div className="row mx-1 my-2">
                    <div className="col">
                        <h5 className="wbdv-widget-header mt-2 align-center">Paragraph
                            Widget</h5>
                        <span className="float-md-right form-inline">
                        <button className="btn btn-info m-1"><i
                            className="fas fa-arrow-down"/></button>
                        <button className="btn btn-info m-1"><i
                            className="fas fa-arrow-up"/></button>
                        <select className="custom-select m-1"
                                value={this.props.widget.type}
                                onChange={(e) => {
                                    let newType = e.target.value;
                                    this.props.updateWidget({
                                                                ...this.props.widget,
                                                                type: newType
                                                            });
                                }}>
                            <option value="heading">Heading</option>
                            <option value="paragraph">Paragraph</option>
                        </select>
                        <button className="btn btn-danger m-1"
                                onClick={() => this.props.deleteWidget(this.props.widget._id)}><i
                            className="fas fa-trash"/></button>
                    </span>
                    </div>
                </div>
                <div className="row mx-1 my-2">
                    <div className="col">
                        <div className="form-group">
                            <textarea className="form-control"
                                   placeholder="Paragraph text"
                                   value={this.props.widget.paragraphText}
                                   onChange={(e)=>{
                                       let newText = e.target.value;
                                       this.props.updateWidget({   ...this.props.widget,
                                                                   paragraphText: newText
                                                               }
                                       );
                                   }}/>
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control"
                                   placeholder="Widget Name"
                                   value={this.props.widget.name}
                                   onChange={(e)=>{
                                       let newText = e.target.value;
                                       this.props.updateWidget({   ...this.props.widget,
                                                                   name: newText
                                                               }
                                       );
                                   }}/>
                        </div>
                    </div>
                </div>
                <div className="row mx-1 my-2">
                    <div className="col">
                        <h5>Preview</h5>
                        <p>{this.props.widget.paragraphText}</p>
                    </div>
                </div>
            </div>
        )
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        deleteWidget: (id) =>
            status =>
                dispatch(deleteWidget(id)),
        updateWidget: (id, obj) =>
            dispatch(updateWidget(obj)),
    }
};

const stateToPropertyMapper = (state) => {
    return {}
};
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ParagraphWidgetComponent)