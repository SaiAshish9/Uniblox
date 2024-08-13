const path = require("path"); // Node.js module to handle and transform file paths
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Plugin to simplify creation of HTML files

module.exports = {
  mode: "development", // Set the mode to development for better debugging and readable output

  entry: "./src/index.js", // Entry point of the application, where Webpack starts bundling

  output: {
    path: path.resolve(__dirname, "dist"), // Output directory for the bundled files
    filename: "bundle.js", // Name of the output bundle file
    publicPath: "/", // Public URL of the output directory when referenced in a browser
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".svg"], // Extensions that Webpack will resolve
  },

  module: {
    rules: [
      {
        test: /\.js$/, // Target files with .js extension
        exclude: /node_modules/, // Exclude files in the node_modules directory
        use: {
          loader: "babel-loader", // Use Babel to transpile ES6+ code into ES5
        },
      },
      {
        test: /\.css$/, // Target files with .css extension
        use: ["style-loader", "css-loader"], // Use loaders to handle CSS files (inject styles and resolve imports)
      },
      {
        test: /\.svg$/, // Target files with .svg extension
        use: [
          {
            loader: "svg-url-loader", // Use loader to optimize SVG files as data URLs
            options: {
              limit: 10000, // Convert SVG files smaller than 10kB to data URLs
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Use the specified HTML file as a template for generating the final HTML file
    }),
  ],

  devServer: {
    hot: true, // Enable hot module replacement without a full reload
    liveReload: true, // Enable live reloading when files change
    static: {
      directory: path.join(__dirname, "public"), // Serve static files from the public directory
    },
    historyApiFallback: true, // Serve index.html for all 404 (not found) errors, useful for single-page apps
    port: 3000, // Port number for the development server
  },
};
