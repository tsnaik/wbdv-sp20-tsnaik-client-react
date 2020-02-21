import React from "react";
import widgetService from "../../../services/WidgetService";
import {
    deleteWidget,
    moveWidgetDown,
    moveWidgetUp,
    updateWidget
} from "../../../actions/WidgetActions";
import {connect} from "react-redux";

const ParagraphWidgetComponent = (props) =>
    <div>
        <div className={`mt-1 ${props.preview === false ? 'border rounded' : ''}`}>
            {props.preview === false &&
             <div>
                 <div className="row mx-1 my-2">
                     <div className="col">
                         <h5 className="wbdv-widget-header mt-2 align-center">Paragraph
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
                        </select>
                        <button className="btn btn-danger m-1"
                                onClick={() => props.deleteWidget(props.widget._id)}><i
                            className="fas fa-trash"/></button>
                    </span>
                     </div>
                 </div>
                 <div className="row mx-1 my-2">
                     <div className="col">
                         <div className="form-group">
                             <label htmlFor={`wbdvParaText-${props.widget._id}`}> Paragraph
                                 Text </label>

                             <textarea className="form-control"
                                       placeholder="Paragraph text"
                                       value={props.widget.paragraphText}
                                       id={`wbdvParaText-${props.widget._id}`}
                                       onChange={(e) => {
                                           let newText = e.target.value;
                                           props.updateWidget({
                                                                  ...props.widget,
                                                                  paragraphText: newText
                                                              }
                                           );
                                       }}/>
                         </div>

                         <div className="form-group">
                             <label htmlFor={`wbdvWidgetName-${props.widget._id}`}> Widget
                                 Name </label>
                             <input type="text" className="form-control"
                                    placeholder="Widget Name"
                                    id={`wbdvWidgetName-${props.widget._id}`}
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
                    <p className='wbdv-paragraph'>{props.widget.paragraphText}</p>
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
(ParagraphWidgetComponent)