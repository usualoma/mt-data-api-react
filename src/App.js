import React from "react";
import MT from "./MT";
import IndexTemplate from "./IndexTemplate";

function App({apiUrl}) {
  return (<MT apiUrl={apiUrl}>{IndexTemplate}</MT>);
}

export default App;
