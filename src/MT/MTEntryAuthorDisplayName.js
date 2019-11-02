import { h } from 'preact';
import MT from "../MT";

class MTEntryAuthorDisplayName extends MT.Component {
  render() {
    if (this.props.render) {
      return (
        <MT.Context.Consumer>{({entry}) => this.props.render(entry.author.displayName)}</MT.Context.Consumer>
      );
    }

    return (
      <MT.Context.Consumer>{({entry}) => entry.author.displayName}</MT.Context.Consumer>
    )
  }
}

MT.EntryAuthorDisplayName = MTEntryAuthorDisplayName;

export default MTEntryAuthorDisplayName;
