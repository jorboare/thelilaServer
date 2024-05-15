// corsConfig.js
const whitelist = [""];

const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
    // if (whitelist.indexOf(origin) !== -1 || !origin) {
    //   callback(null, true);
    // } else {
    //   callback(new Error("Not allowed by CORS"));
    // }
  },
};

module.exports = corsOptions;
