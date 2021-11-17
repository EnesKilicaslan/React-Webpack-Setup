const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = (envVars) => {
  const { env } = envVars;
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);

  return config;
};
