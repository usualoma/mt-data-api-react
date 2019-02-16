import React, {useContext} from "react";
import ReactDOMServer from 'react-dom/server';
import MT from "../MT";

function recursiveMap(children, fn) {
  return React.Children.map(children, child => {
    if (!React.isValidElement(child)) {
      return child;
    }

    if (child.props.children) {
      child = React.cloneElement(child, {
        children: recursiveMap(child.props.children, fn),
      });
    }

    return fn(child);
  });
}

class Component extends React.Component {
  resolveAttribute(children) {
    return recursiveMap(children, (child) => {
      switch (typeof child) {
        case "string":
          return child;
    
        case "object":
  			  const newProps = {};
          const currentContext = useContext(MT.Context);
          const assetContext = useContext(MT.AssetContext);

          let wrapk = null;
          let wrap = null;
  			  Object.keys(child.props).forEach((k) => {
            const p = child.props[k];
            if (typeof p !== "object" || !p.type || !p.type.toString().match(/ MT/)) {
              return;
            }

            wrapk = k;
            wrap = p;
          });

          if (!wrap) {
            return child;
          }

          return React.cloneElement(wrap, {render: (c) => {
            return React.cloneElement(child, {[wrapk]: c});
          }});
    
        default:
          return null;
      }
    });
  }

  get getResolvedChildren() {
    return () => this.resolveAttribute(this.props.children);
  }
}

export default Component;
