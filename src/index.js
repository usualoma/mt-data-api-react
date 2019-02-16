import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import domready from "domready";
import MT from "./MT";

global.React = React;
global.MT = MT;

//domready(() => {
//  const inputEl = document.getElementById("src");
//  const outputEl = document.getElementById("out");
//  const src = inputEl.value;
//
//  function transform() {
//    try {
//      outputEl.innerHTML = global.Babel.transform("<div>" + inputEl.value + '</div>', {
//        presets: ['es2015', 'react', 'stage-0']
//      }).code;
//
//      const elm = document.getElementById("app");
//      ReactDOM.render(
//        <MT apiUrl={elm.dataset.apiUrl}>{eval(outputEl.innerHTML)}</MT>,
//        elm
//      );
//    } catch (ex) {
//      outputEl.innerHTML = 'ERROR: ' + ex.message;
//    }
//  }
//  inputEl.addEventListener('keyup', transform, false);
//  transform();
//});

domready(() => {
  const elm = document.getElementById("app");
  console.log(window[elm.dataset.template]);
  ReactDOM.render(
    <MT apiUrl={elm.dataset.apiUrl}>{window[elm.dataset.template]()}</MT>,
    elm
  );
});
