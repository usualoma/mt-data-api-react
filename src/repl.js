import moment from "moment";

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
function transform() {
  try {
    if (currentName) {
      delete window[currentName];
    }
    currentName =
      "mtDataApiTemplate_" + moment().format("YYYYMMDDhhmmss");

    var code = Babel.transform(
      "<React.Fragment>" + (inputEl.value || inputEl.innerHTML) + "</React.Fragment>",
      {
        presets: ["es2015", "react", "stage-0"],
      }
    ).code;

    code =
      code.replace(
        /"use strict";\s*/,
        "window." + currentName + " = function(opts) { var React = opts.React; var MT = opts.MT; return "
      ) + " }";

    outputEl.value = code;

    eval(code);

    targetEl.setAttribute("data-mt-data-api-render-template", currentName);
  } catch (ex) {
    outputEl.innerHTML = "ERROR: " + ex.message;
  }
}
transform();
inputEl.addEventListener("input", function(ev) {
  transform();
});
