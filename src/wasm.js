module.exports = typeof window !== 'undefined' ? require("./web") : require("./node");
