const env = require("./env-config")

module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          styles: "./styles",
        },
        cwd: "babelrc",
      },
    ],
    [
      "wrap-in-js",
      {
        extensions: ["css$", "scss$"],
      },
    ],
    ["transform-define", env],
  ],
  presets: ["next/babel"],
  ignore: [],
}
