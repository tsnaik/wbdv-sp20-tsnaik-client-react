export const DELETE_WIDGET = "DELETE_WIDGET";
export const CREATE_WIDGET = "CREATE_WIDGET";
export const FIND_ALL_WIDGETS_FOR_TOPIC = "FIND_ALL_WIDGETS_FOR_TOPIC";
export const UPDATE_WIDGET = "UPDATE_WIDGET";
export const WIDGET_MOVE_UP = "WIDGET_MOVE_UP";
export const WIDGET_MOVE_DOWN = "WIDGET_MOVE_DOWN";

export const deleteWidget = (widgetId) => ({
    type: DELETE_WIDGET,
    widgetId: widgetId
});

export const setAllWidgets = (widgets) => ({
    type: FIND_ALL_WIDGETS_FOR_TOPIC,
    widgets: widgets
});

export const createWidget = (widget) => ({
    type: CREATE_WIDGET,
    newWidget: widget
});

export const updateWidget = (widget) => ({
    type: UPDATE_WIDGET,
    widget: widget
});

export const moveWidgetUp = (widget) => ({
    type:WIDGET_MOVE_UP,
    widget: widget
});

export const moveWidgetDown = (widget) => ({
    type:WIDGET_MOVE_DOWN,
    widget: widget
});

