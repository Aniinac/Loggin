import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import App from "../containers/app";
import HomeRoute from "./home";
import LoginRoute from "./login";
import RegisterRoute from "./register";

function Routes(props) {

    return (
        <Router >
                <LoginRoute />
                <RegisterRoute />
            <App {...props}>
                <HomeRoute />
            </App>
        </Router>
    );
}
export default Routes;