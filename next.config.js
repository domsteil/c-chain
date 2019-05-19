module.exports = (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
      webpack: (config, options) => {
  
        // access to webpack config here
  
        return config;
      },
    });
  };