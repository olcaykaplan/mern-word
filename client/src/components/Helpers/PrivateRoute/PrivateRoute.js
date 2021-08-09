import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ Layout, DirectComponent, path }) => {
  const expireIn = window.localStorage.getItem("expireIn");
  console.log("expireIn private: ", expireIn);
  console.log("path: ", path);
  return expireIn && expireIn > 0 ? (
    <Route path={path} exact>
        <DirectComponent />
    </Route>
  ) : (
    <Redirect to="/" exact />
  );
};

export default PrivateRoute;