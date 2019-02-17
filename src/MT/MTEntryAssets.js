import React from "react";
import MT from "../MT";

class MTEntryAssets extends MT.Component {
  render() {
    return (
      <MT.Context.Consumer>{({entry}) => entry.assets.slice(0, this.props.limit || entry.assets.length).map((asset) => (
        <MT.AssetContext.Provider value={{ asset }}>
          {this.props.children}
        </MT.AssetContext.Provider>
      ))}</MT.Context.Consumer>
    )
  }
}

MT.EntryAssets = MTEntryAssets;

export default MTEntryAssets;
