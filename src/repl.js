import md5 from "md5";
import ReactDOM from "react-dom";
import * as Babel from "babel-standalone";

const elms = document.querySelectorAll(
  "[data-mt-data-api-template]"
);

(() => {
  const dataApiUrl = document.getElementById("data-api-url");
  const update = () => {
    Array.prototype.slice.call(elms, 0).forEach(elm => {
      ReactDOM.unmountComponentAtNode(elm);
      elm.setAttribute("data-mt-data-api-url", dataApiUrl.value);
    });
  };

  dataApiUrl
    .addEventListener("change", function(ev) {
      update();
    });
  update();
})();

Array.prototype.slice.call(elms, 0).forEach(elm => {
  const inputEl = document.querySelector(elm.dataset.mtDataApiTemplate);
  const outputEl = inputEl ? document.querySelector(inputEl.dataset.mtDataApiResult) : null;

  let currentName = null;
  function transform() {
    try {
      const inputValue = inputEl.value || inputEl.innerHTML;

      if (currentName) {
        delete window[currentName];
      }
      currentName = "mtDataApiTemplate_" + md5(inputValue).substring(0, 8);

      let code = Babel.transform(
        "<React.Fragment>" + inputValue + "</React.Fragment>",
        {
          presets: ["es2015", "react", "stage-0"],
        }
      ).code;

      code =
        code.replace(
          /^("use strict";)?\s*/,
          "window." + currentName + " = function(opts) { var React = opts.React; var MT = opts.MT; return "
        ) + " }";

      if (outputEl) {
        outputEl.value = code;
        outputEl.dataset.mtDataApiFilename = currentName + '.js';
      }

      eval(code);

      ReactDOM.unmountComponentAtNode(elm);
      elm.setAttribute("data-mt-data-api-template", currentName);
    } catch (ex) {
      if (outputEl) {
        outputEl.innerHTML = "ERROR: " + ex.message;
      }
    }
  }
  transform();
  inputEl.addEventListener("input", function(ev) {
    transform();
  });
});
