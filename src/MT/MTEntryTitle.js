import React from "react";
import MT from "../MT";

class MTEntryTitle extends MT.Component {
  render() {
    return (
      <MT.Context.Consumer>{({entry}) => entry.title}</MT.Context.Consumer>
    )
  }
}

MT.EntryTitle = MTEntryTitle;

export default MTEntryTitle;
