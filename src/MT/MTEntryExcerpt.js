import React, {useContext} from "react";
import MT from "../MT";

class MTEntryExcerpt extends MT.Component {
  render() {
    return (
      <MT.Context.Consumer>{({entry}) => entry.excerpt}</MT.Context.Consumer>
    )
  }
}

MT.EntryExcerpt = MTEntryExcerpt;

export default MTEntryExcerpt;
