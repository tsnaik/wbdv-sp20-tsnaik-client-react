import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from "redux";
import ModuleReducer from "./reducers/ModuleReducer";
import LessonReducer from "./reducers/LessonReducer";
import {Provider} from "react-redux";

const rootReducer = combineReducers({
                                        modules: ModuleReducer,
                                        lessons: LessonReducer
                                    });
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
