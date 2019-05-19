const path = require('path');
const webpack = require('webpack');

var config = {
  pageExtensions: ['jsx', 'js', 'mdx'],
  webpack: (config, { dev, isServer }) => {
    config.plugins = config.plugins || [];
    config.plugins.push(
      new webpack.ContextReplacementPlugin(
        /highlight\.js[\/\\]lib[\/\\]languages$/,
        new RegExp(`^./(${['javascript', 'json', 'xml'].join('|')})$`)
      )
    );

    if (isServer && !dev) {
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = { ...(await originalEntry()) };
        // removed
        return entries;
      };
    }

    return config;
  }
};