import { h, render, createContext } from 'preact';
import Component from "./MT/Component";

function MT({ children, apiUrl }) {
  MT.apiUrl = apiUrl;
  return (
    <MT.ApiContext.Provider value={{ apiUrl }}>
      {children}
    </MT.ApiContext.Provider>
  );
}

MT.render = (reactElements, rootProps, element) => {
  render(<MT {...rootProps}>{reactElements}</MT>, element);
};

MT.Component = Component;
MT.Context = createContext(null);
MT.AssetContext = createContext(null);
MT.ApiContext = createContext(null);

export default MT;
