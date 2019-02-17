import React from "react";
import moment from "moment-strftime";
import MT from "../MT";

class MTEntryDate extends MT.Component {
  render() {
    const renderDate = (({date}) => {
      const m = moment(date);
      if (this.props.format) {
        return m.strftime(this.props.format);
      }
      else {
        return m.format();
      }
    });

    if (this.props.render) {
      return (
        <MT.Context.Consumer>{({entry}) => this.props.render(renderDate(entry))}</MT.Context.Consumer>
      );
    }

    return (
      <MT.Context.Consumer>{({entry}) => renderDate(entry)}</MT.Context.Consumer>
    )
  }
}

MT.EntryDate = MTEntryDate;

export default MTEntryDate;
