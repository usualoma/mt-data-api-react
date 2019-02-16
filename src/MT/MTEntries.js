import axios from "axios";
import React, { createContext, useContext } from "react";
import MT from "../MT";

class MTEntries extends MT.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
    };
  }

  componentDidMount() {
    const c = { apiUrl: MT.apiUrl };
    axios(`${c.apiUrl}/entries`).then(({ data }) => {
      this.setState({ data: data });
    });
  }

  render() {
    if (!this.state.data) {
      return null;
    }

    return this.state.data.items.map(entry => (
      <MT.Context.Provider value={{ entry }}>
        <this.getResolvedChildren />
      </MT.Context.Provider>
    ));
  }
}

MT.Entries = MTEntries;

export default MTEntries;
