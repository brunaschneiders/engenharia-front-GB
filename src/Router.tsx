import {
  BrowserRouter,
  Route,
  RouteProps,
  Redirect,
  Switch,
} from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { LOGGED_USER_LOCAL_STORAGE_KEY, ROUTES } from "./constants";

interface ProtectedRouteProps extends RouteProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const isLoggedIn = localStorage.getItem(LOGGED_USER_LOCAL_STORAGE_KEY);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: ROUTES.LOGIN, state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login} />
        <ProtectedRoute path={ROUTES.HOME} component={Home} />
        <Redirect from="*" to={ROUTES.LOGIN} />
      </Switch>
    </BrowserRouter>
  );
};
