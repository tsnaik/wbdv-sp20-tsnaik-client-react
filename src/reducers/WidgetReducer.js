import {
    CREATE_WIDGET,
    DELETE_WIDGET,
    FIND_ALL_WIDGETS_FOR_TOPIC,
    UPDATE_WIDGET, WIDGET_MOVE_UP
} from "../actions/WidgetActions";

const initialState = {
    widgets: [],
    topic: null,
};

const WidgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_ALL_WIDGETS_FOR_TOPIC:
            console.log('setting widgets', state, action);
            return {
                widgets: action.widgets,
                topic: state.topic,
            };
        case CREATE_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    action.newWidget
                ],
                topic: state.topic,
            };
        case DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => widget._id !== action.widgetId),
                topic: state.topic,
            };
        case UPDATE_WIDGET:
            console.log('updating', action.widget);
            const index = state.widgets.findIndex(widget => widget._id === action.widget._id);
            return {
                widgets: [
                    ...state.widgets.slice(0, index),
                    action.widget,
                    ...state.widgets.slice(index + 1)
                ],
                topic: state.topic,
            };
        case WIDGET_MOVE_UP:

        default:
            return state
    }
};

export default WidgetReducer