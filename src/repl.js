import moment from "moment";
import {transform} from "@babel/standalone";

var inputEl = document.getElementById("template");
var outputEl = document.getElementById("result");
var targetEl = document.querySelector(
  "[data-mt-data-api-render-template]"
);

var dataApiUrlEl = document.getElementById("data-api-url");
dataApiUrlEl
  .addEventListener("change", function(ev) {
    targetEl.setAttribute("data-api-url", dataApiUrlEl.value);
  });
targetEl.setAttribute("data-api-url", dataApiUrlEl.value);

var currentName = null;
function _transform() {
  try {
    if (currentName) {
      delete window[currentName];
    }
    currentName =
      "mtDataApiTemplate_" + moment().format("YYYYMMDDhhmmss");

    var code = transform(
      "<React.Fragment>" + (inputEl.value || inputEl.innerHTML) + "</React.Fragment>",
      {
        presets: ["react"],
      }
    ).code;

    code = "window." + currentName + " = function(opts) { var React = opts.React; var MT = opts.MT; return " + code + " }";

    outputEl.value = code;

    eval(code);

    targetEl.setAttribute("data-mt-data-api-render-template", currentName);
  } catch (ex) {
    outputEl.innerHTML = "ERROR: " + ex.message;
  }
}
_transform();
inputEl.addEventListener("input", function(ev) {
  _transform();
});
