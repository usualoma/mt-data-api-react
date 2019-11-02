import { h } from 'preact';
import MT from "../MT";

class MTEntryPermalink extends MT.Component {
  render() {
    if (this.props.render) {
      return (
        <MT.Context.Consumer>{({entry}) => this.props.render(entry.permalink)}</MT.Context.Consumer>
      );
    }

    return (
      <MT.Context.Consumer>{({entry}) => entry.permalink}</MT.Context.Consumer>
    )
  }
}

MT.EntryPermalink = MTEntryPermalink;

export default MTEntryPermalink;
