window.indexTemplate = function(opts) {
  var React = opts.React;
  var MT = opts.MT;

  return React.createElement(
    React.Fragment,
    null,
    React.createElement("h1", null, "Entries"),
    React.createElement(
      "ul",
      { className: "list-unstyled" },
      React.createElement(
        MT.Entries,
        null,
        React.createElement(
          "li",
          {
            id: React.createElement(MT.EntryId, null),
            className: "media mt-3 border-bottom",
          },
          React.createElement(
            MT.EntryAssets,
            { limit: "1" },
            React.createElement("img", {
              src: React.createElement(MT.AssetThumbnailUrl, { width: "150" }),
              className: "mr-3",
            })
          ),
          React.createElement(
            "div",
            { className: "media-body" },
            React.createElement(
              "a",
              {
                href: React.createElement(MT.EntryPermalink, null),
                className: "text-body",
              },
              React.createElement(
                "h5",
                { className: "mt-0 mb-1" },
                React.createElement(MT.EntryTitle, null)
              )
            ),
            React.createElement(
              "div",
              { className: "text-secondary small" },
              React.createElement(
                "span",
                { className: "mr-3" },
                React.createElement(MT.EntryDate, { format: "%Y.%m.%d" })
              ),
              React.createElement(
                "span",
                { className: "mr-3" },
                React.createElement(MT.EntryAuthorDisplayName, null)
              )
            ),
            React.createElement(
              "p",
              null,
              React.createElement(MT.EntryExcerpt, null)
            )
          )
        )
      )
    )
  );
};
