const reusables = {};

const files = require.context(".", false, /\.js$/);

files.keys().forEach((key) => {
  if (key !== "./index.js") {
    const componentName = key.replace("./", "").replace(".js", "");
    reusables[componentName] = files(key).default;
  }
});

export default reusables;
