import { FC, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import ErrorBoundary from "./ErrorBoundary";
import { Loader } from "../components";
import router from "../router";

const DashboardMain = lazy(
  () =>
    import(
      /* webpackChunkName: "dashboard" */ "../modules/dashboard/DashboardMain"
    )
);

const StudioMain = lazy(
  () => import(/* webpackChunkName: "studio" */ "../modules/studio/StudioMain")
);

const ProjectsMain = lazy(
  () =>
    import(/* webpackChunkName: "project" */ "../modules/projects/ProjectsMain")
);

const ContactUsMain = lazy(
  () =>
    import(
      /* webpackChunkName: "contact_us" */ "../modules/contact-us/ContactUsMain"
    )
);

const App: FC<{}> = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route
              exact
              path={router.dashboard.main}
              component={DashboardMain}
            />
            <Route exact path={router.studio.main} component={StudioMain} />
            <Route exact path={router.projects.main} component={ProjectsMain} />
            <Route exact path={router.contact.main} component={ContactUsMain} />

            <Redirect to={router.dashboard.main} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
