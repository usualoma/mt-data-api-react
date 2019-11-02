import { h } from 'preact';
import MT from "../MT";

class MTEntryId extends MT.Component {
  render() {
    if (this.props.render) {
      return (
        <MT.Context.Consumer>{({entry}) => this.props.render(entry.id)}</MT.Context.Consumer>
      );
    }

    return (
      <MT.Context.Consumer>{({entry}) => entry.id}</MT.Context.Consumer>
    )
  }
}

MT.EntryId = MTEntryId;

export default MTEntryId;
