try {
  module.exports = require("./web");
} catch (e) {
  module.exports = require("./node");
}
