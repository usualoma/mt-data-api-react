import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import domready from "domready";

domready(() => {
  const elm = document.getElementById("app");
  ReactDOM.render(
    <App
      apiUrl={elm.dataset.apiUrl}
    />,
    elm
  );
});
