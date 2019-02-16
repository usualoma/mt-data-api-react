import React, {createContext} from "react";
import Component from './MT/Component';

function MT({ children, apiUrl }) {
  MT.apiUrl = apiUrl;
  return (<MT.ApiContext.Provider value={{apiUrl}}>{children}</MT.ApiContext.Provider>);
}

MT.Fragment = ({children}) => children;

MT.Component = Component;
MT.Context = createContext(null);
MT.AssetContext = createContext(null);
MT.ApiContext = createContext(null);

export default MT;
