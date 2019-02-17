import React from "react";
import ReactDOM from "react-dom";
import domready from "domready";
import MT from "./MT";
import "./MT/Tags";

domready(() => {
  if (typeof document === "undefined") {
    return;
  }

  const elms = document.querySelectorAll("[data-mt-data-api-template]");
  Array.prototype.slice.call(elms, 0).forEach(elm => {
    const render = () => {
      const getElements = global[elm.dataset.mtDataApiTemplate];

      if (typeof getElements !== "function") {
        return;
      }

      const apiUrl = elm.dataset.apiUrl;

      if (!apiUrl) {
        return;
      }

      ReactDOM.render(
        <MT apiUrl={apiUrl}>
          {getElements({
            MT,
            React,
          })}
        </MT>,
        elm
      );
    };
    render();

    if (typeof MutationObserver === "undefined") {
      return;
    }

    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        render();
      });
    });
    observer.observe(elm, { attributes: true });
  });
});
