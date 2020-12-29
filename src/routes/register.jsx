import { Route } from "react-router-dom";
import Routes from "../constants/routes";
import RegisterPage from "../components/register.components";

function RegisterRoute() {
    return <Route path={Routes.REGISTER.path} component={RegisterPage} />;
}

export default RegisterRoute;