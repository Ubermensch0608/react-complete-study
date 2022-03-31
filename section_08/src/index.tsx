import React from "react";
import ReactDOM from "react-dom/client";

import { store } from "./store/store";
import { Provider } from "react-redux";
import App from "./App";

const container = document.getElementById("root") as HTMLDivElement;
const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
