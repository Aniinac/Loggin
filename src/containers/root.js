import React from "react";
import { Provider } from "react-redux";
import Routes from "../routes";


const Root = props => {
    const { store } = props;

    return (
        <Provider store={store}>
            <Routes store={store} />
        </Provider>

    );
}
export default Root;