import React from "react";
import {
    deleteWidget,
    moveWidgetDown,
    moveWidgetUp,
    updateWidget
} from "../../../actions/WidgetActions";
import {connect} from "react-redux";
import widgetService from "../../../services/WidgetService";

const HeadingWidgetComponent = (props) =>
    <div>
        <div className={`mt-1 ${props.preview === false ? 'border rounded' : ''}`}>
            {props.preview === false &&
             <div>
                 <div className="row mx-1 my-2">
                     <div className="col">
                         <h5 className="wbdv-widget-header mt-2 align-center">Heading
                             Widget</h5>
                         <span className="float-md-right form-inline">
                        {props.index !== props.size - 1 && <button
                            className="btn btn-info m-1"
                            onClick={() => props.moveDown(props.widget)}><i
                            className="fas fa-arrow-down"/></button>}
                             {props.index !== 0 &&
                              <button className="btn btn-info m-1"
                                      onClick={() => props.moveUp(props.widget)}>
                                  <i
                                      className="fas fa-arrow-up"/></button>}
                             <select className="custom-select m-1"
                                     value={props.widget.type}
                                     onChange={(e) => {
                                         let newType = e.target.value;
                                         props.updateWidget({
                                                                ...props.widget,
                                                                type: newType
                                                            });
                                     }}>
                            <option value="heading">Heading</option>
                            <option value="paragraph">Paragraph</option>
                            <option value="image">Image</option>
                            <option value="list">List</option>
                        </select>
                        <button className="btn btn-danger m-1"
                                onClick={() => props.deleteWidget(props.widget._id)}><i
                            className="fas fa-trash"/></button>
                    </span>
                     </div>
                 </div>
                 <div className="row mx-1 my-2">
                     <div className="col">
                         <div className="form-group ">
                             <label htmlFor={`wbdvHeadingText-${props.widget._id}`}> Heading
                                 Text </label>
                             <input type="text" id={`wbdvHeadingText-${props.widget._id}`}
                                    className="form-control"
                                    placeholder="Heading Text"
                                    value={props.widget.text}
                                    onChange={(e) => {
                                        let newText = e.target.value;
                                        props.updateWidget({
                                                               ...props.widget,
                                                               text: newText
                                                           }
                                        );
                                    }}/>
                         </div>
                         <div className="form-group ">
                             <label htmlFor={`wbdvHeadingSize-${props.widget._id}`}> Heading
                                 Size </label>
                             <select className="custom-select"
                                     id={`wbdvHeadingSize-${props.widget._id}`}
                                     value={props.widget.size}
                                     onChange={(e) => {
                                         let newSize = parseInt(e.target.value);
                                         props.updateWidget({
                                                                ...props.widget,
                                                                size: newSize
                                                            }
                                         );
                                     }}>
                                 <option value="1">Heading 1</option>
                                 <option value="2">Heading 2</option>
                                 <option value="3">Heading 3</option>
                                 <option value="4">Heading 4</option>
                                 <option value="5">Heading 5</option>
                                 <option value="6">Heading 6</option>
                             </select>
                         </div>
                         <div className="form-group ">
                             <label htmlFor={`wbdvWidgetName-${props.widget._id}`}> Widget
                                 Name </label>
                             <input type="text" className="form-control"
                                    id={`wbdvWidgetName-${props.widget._id}`}
                                    placeholder="Widget Name"
                                    value={props.widget.name}
                                    onChange={(e) => {
                                        let newText = e.target.value;
                                        props.updateWidget({
                                                               ...props.widget,
                                                               name: newText
                                                           }
                                        );
                                    }}/>
                         </div>
                     </div>
                 </div>
             </div>
            }
            <div className="row mx-1 my-2">
                <div className="col">
                    {props.preview === false && <h5>Preview</h5>}
                    {props.widget.size === 1 && <h1>{props.widget.text}</h1>}
                    {props.widget.size === 2 && <h2>{props.widget.text}</h2>}
                    {props.widget.size === 3 && <h3>{props.widget.text}</h3>}
                    {props.widget.size === 4 && <h4>{props.widget.text}</h4>}
                    {props.widget.size === 5 && <h5>{props.widget.text}</h5>}
                    {props.widget.size === 6 && <h6>{props.widget.text}</h6>}
                </div>
            </div>
        </div>

    </div>;

const dispatchToPropertyMapper = (dispatch) => {
    return {
        deleteWidget: (id) =>
            widgetService.deleteWidget(id)
                .then(status =>
                          dispatch(deleteWidget(id))),
        updateWidget: (obj) =>
            dispatch(updateWidget(obj)),
        moveUp: (obj) =>
            dispatch(moveWidgetUp(obj)),
        moveDown: (obj) =>
            dispatch(moveWidgetDown(obj)),
    }
};

const stateToPropertyMapper = (state) => {
    return {}
};
export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(HeadingWidgetComponent)