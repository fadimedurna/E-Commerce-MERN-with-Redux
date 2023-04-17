import React, { useEffect, Fragment } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

function ScrollToTop(props) {
  const { router } = props;
  const { location } = router;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <Fragment>{props.children}</Fragment>;
}

export default withRouter(ScrollToTop);
