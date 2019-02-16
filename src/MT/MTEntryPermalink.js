import React, {useContext} from "react";
import MT from "../MT";

class MTEntryPermalink extends MT.Component {
  render() {
    return (
      <MT.Context.Consumer>{({entry}) => entry.permalink}</MT.Context.Consumer>
    )
  }
}

MT.EntryPermalink = MTEntryPermalink;

export default MTEntryPermalink;
