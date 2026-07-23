export default {
  output: 'static',
  build: {
    format: 'directory',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
};
