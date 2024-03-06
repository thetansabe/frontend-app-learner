import "core-js/stable";
import "regenerator-runtime/runtime";

import {
  APP_INIT_ERROR,
  APP_READY,
  subscribe,
  initialize,
} from "@edx/frontend-platform";
import { AppProvider, ErrorPage } from "@edx/frontend-platform/react";
import ReactDOM from "react-dom";

import Header from "@edx/frontend-component-header";
import messages from "./i18n";
import ExamplePage from "./example/ExamplePage";
import { Provider } from "react-redux";
import "./index.scss";
import store from "./example/data/redux/store";

// ReactDOM.render(
//   <Provider store={store}>
//     <ExamplePage />
//   </Provider>,
//   document.getElementById("root")
// );

subscribe(APP_READY, () => {
  ReactDOM.render(
    <AppProvider store={store}>
      <Header />
      <ExamplePage />
    </AppProvider>,
    document.getElementById("root")
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  ReactDOM.render(
    <ErrorPage message={error.message} />,
    document.getElementById("root")
  );
});

initialize({
  messages,
  requireAuthenticatedUser: true,
});
