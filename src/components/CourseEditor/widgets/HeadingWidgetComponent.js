import React from "react";
import widgetService from "../../../services/WidgetService";
import {deleteWidget, updateWidget} from "../../../actions/WidgetActions";
import {connect} from "react-redux";

class HeadingWidgetComponent extends React.Component {

    render() {
        return (
            <div className="mt-1 border rounded">
                <div className="row mx-1 my-2">
                    <div className="col">
                        <h5 className="wbdv-widget-header mt-2 align-center">Heading
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
                                    // await new Promise(r => setTimeout(r, 1));
                                    this.props.updateWidget(this.props.widget._id,
                                                            {
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
                            <input type="text" className="form-control"
                                   placeholder="Heading text"
                                   value={this.props.widget.text}/>
                        </div>
                        <div className="form-group">
                            <select className="custom-select"
                                    value={this.props.widget.size}
                                    onChange={(e) => {
                                        let newSize = e.target.value;
                                        this.props.updateWidget(this.props.widget._id,
                                                                    {   ...this.props.widget,
                                                                        size: newSize
                                                                    }
                                                                );
                                    }}
                                    >
                                <option value="1">Heading 1</option>
                                <option value="2">Heading 2</option>
                                <option value="3">Heading 3</option>
                                <option value="4">Heading 4</option>
                                <option value="5">Heading 5</option>
                                <option value="6">Heading 6</option>
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
        )
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        deleteWidget: (id) =>
            widgetService.deleteWidget(id)
                .then(status =>
                          dispatch(deleteWidget(id))),
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
(HeadingWidgetComponent)