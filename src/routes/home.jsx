import Routes from "../constants/routes";
import HomePage from "../components/homePage.components.js";
import { PrivateRoute } from "./privateRoute"

function HomeRoute() {
    return <PrivateRoute exact path={Routes.HOME.path} component={HomePage} />;
}

export default HomeRoute;