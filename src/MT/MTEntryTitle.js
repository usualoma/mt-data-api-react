import { h } from 'preact';
import MT from "../MT";

class MTEntryTitle extends MT.Component {
  render() {
    if (this.props.render) {
      return (
        <MT.Context.Consumer>{({entry}) => this.props.render(entry.title)}</MT.Context.Consumer>
      );
    }

    return (
      <MT.Context.Consumer>{({entry}) => entry.title}</MT.Context.Consumer>
    )
  }
}

MT.EntryTitle = MTEntryTitle;

export default MTEntryTitle;
