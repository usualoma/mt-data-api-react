module.exports = {
  mode: "production",
  entry: {
    main: './src/index.js',
    repl: './src/repl.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      node: "current",
                    },
                  },
                ],
                "@babel/preset-react",
              ],
            },
          },
        ],
      },
    ],
  },
};
