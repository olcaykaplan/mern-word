import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ Layout, DirectComponent, path }) => {
  const expireDate = window.localStorage.getItem("expireDate");
  console.log("expireDate private: ", expireDate);
  return expireDate && expireDate > 0 ? (
    <Route path={path} exact>
      <Layout>
        <DirectComponent />
      </Layout>
    </Route>
  ) : (
    <Redirect to="/" exact />
  );
};

export default PrivateRoute;