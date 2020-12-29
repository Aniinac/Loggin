import { Route } from "react-router-dom";
import Routes from "../constants/routes";
import LoginPage from '../components/login.components'

function LoginRoute() {
    return <Route exact path={Routes.LOGIN.path} component={LoginPage} />;
}

export default LoginRoute;