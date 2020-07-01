const libPath = 'modules/tailwind-config-norska';
const docsPath = 'modules/tailwind-config-norska-docs';
module.exports = {
  port: 8087,
  cloudinary: {
    bucketName: null,
    enable: false,
  },
  netlify: {
    deploy: {
      files: [
        'netlify.toml',
        '.nvmrc',
        'README.md',
        `${docsPath}/norska.config.js`,
        `${docsPath}/tailwind.config.js`,
        `${docsPath}/src/**/*`,
        `${docsPath}/lib/*.js`,
        `${libPath}/lib/*.js`,
        `${libPath}/lib/helpers/*.js`,
        `${libPath}/lib/plugins/**/*.js`,
        `${libPath}/lib/themes/**/*.js`,
      ],
    },
  },
};
