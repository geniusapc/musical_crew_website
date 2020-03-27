const env = process.env;

let prod = {
  port: env.PORT
};

let dev = {
  port: 8080
};

if (process.env.NODE_ENV == "production") {
  module.exports = prod;
} else {
  module.exports = dev;
}
